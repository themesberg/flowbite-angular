import type { DeepPartial } from '../../common';
import { ModalStateService } from '../../services/state/modal.state';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';
import { ModalHeaderComponent } from './modal-header.component';
import type { ModalClass, ModalPositions, ModalSizes, ModalTheme } from './modal.theme';
import { ModalThemeService } from './modal.theme.service';

import { NgClass } from '@angular/common';
import {
  afterNextRender,
  booleanAttribute,
  Component,
  contentChild,
  EmbeddedViewRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnDestroy,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

/**
 * @see https://flowbite.com/docs/components/modal/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal',
  template: `
    <ng-template #modal>
      <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40">
      </div>

      <div [ngClass]="contentClasses().rootClass" (click)="onBackdropClick($event)">
        <div [ngClass]="contentClasses().modalContainerClass">
          <div [ngClass]="contentClasses().modalContentClass">
            <ng-content />
          </div>
        </div>
      </div>
    </ng-template>
  `,
  providers: [
    {
      provide: ModalStateService,
      useFactory: () => {
        const service = inject(ModalStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new ModalStateService();
      },
    },
  ],
})
export class ModalComponent extends BaseComponent implements OnDestroy {
  @HostBinding('tabindex') hostTabIndexValue = '-1';

  private readonly destroyed = new Subject<void>();

  public readonly themeService = inject(ModalThemeService);
  public readonly stateService = inject(ModalStateService);
  public readonly modalHeaderChild = contentChild(ModalHeaderComponent);
  public readonly modalBodyChild = contentChild(ModalBodyComponent);
  public readonly modalFooterChild = contentChild(ModalFooterComponent);

  public override contentClasses = signal<ModalClass>(
    createClass({ modalContainerClass: '', modalContentClass: '', rootClass: '' }),
  );

  //#region template properties
  private readonly template = viewChild.required('modal', { read: TemplateRef });

  private readonly viewContainer = inject(ViewContainerRef);
  private readonly router = inject(Router);

  private embeddedView?: EmbeddedViewRef<unknown>;
  //#endregion

  //#region properties
  public size = input<keyof ModalSizes>('md');
  public position = input<keyof ModalPositions>('center');
  public isDismissable = input<boolean, unknown>(false, { transform: booleanAttribute });
  public isOpen = input<boolean, unknown>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<ModalTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.stateService.select('isOpen')()),
      size: this.size(),
      position: this.position(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override init(): void {
    afterNextRender(
      () => {
        this.stateService.set('isOpen', this.isOpen());
      },
      { injector: this.injector },
    );

    // close modal if it's not destroyed on route change
    this.router.events
      .pipe(
        takeUntil(this.destroyed),
        filter(() => this.isOpen()),
        filter(event => event instanceof NavigationStart)
      ).subscribe(() => this.close());
  }

  public override verify(): void {
    if (this.modalBodyChild() === undefined) {
      throw new Error('No ModalBodyComponent available');
    }
  }
  //#endregion

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  open() {
    this.stateService.set('isOpen', true);
    this.changeBackdrop();
  }

  close() {
    this.stateService.set('isOpen', false);
    this.changeBackdrop();
  }

  toggle() {
    this.stateService.set('isOpen', this.stateService.select('isOpen')());
    this.changeBackdrop();
  }

  // If isOpen changes, add or remove template
  changeBackdrop() {
    if (this.stateService.select('isOpen')()) {
      this.createTemplate();
    } else {
      this.destroyTemplate();
    }
  }

  private createTemplate() {
    if (this.embeddedView) {
      this.destroyTemplate();
    }

    this.embeddedView = this.viewContainer.createEmbeddedView(this.template());
  }

  private destroyTemplate() {
    this.embeddedView?.destroy();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target == event.currentTarget && this.isDismissable()) {
      this.close();
    }
  }
}
