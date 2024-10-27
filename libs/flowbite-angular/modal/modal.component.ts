import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';
import { ModalHeaderComponent } from './modal-header.component';
import type { ModalClass, ModalPositions, ModalSizes, ModalTheme } from './modal.theme';
import { ModalThemeService } from './modal.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import type { EmbeddedViewRef, OnDestroy } from '@angular/core';
import {
  Component,
  contentChild,
  inject,
  model,
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
      <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[99]"></div>

      <div [ngClass]="contentClasses().modalWrapperClass" (click)="onBackdropClick($event)">
        <div [ngClass]="contentClasses().modalContainerClass">
          <div [ngClass]="contentClasses().modalContentClass">
            <ng-content />
          </div>
        </div>
      </div>
    </ng-template>
  `,
  host: {
    tabindex: '-1',
    '(document:keydown)': 'onKeydownHandler($event)',
  },
})
export class ModalComponent extends BaseComponent<ModalClass> implements OnDestroy {
  private readonly destroyed = new Subject<void>();

  public readonly themeService = inject(ModalThemeService);
  public readonly modalHeaderChild = contentChild(ModalHeaderComponent);
  public readonly modalBodyChild = contentChild(ModalBodyComponent);
  public readonly modalFooterChild = contentChild(ModalFooterComponent);

  //#region template properties
  private readonly template = viewChild.required('modal', { read: TemplateRef });

  private readonly viewContainer = inject(ViewContainerRef);
  private readonly router = inject(Router);

  private embeddedView?: EmbeddedViewRef<unknown>;
  //#endregion

  //#region properties
  public size = model<keyof ModalSizes>('md');
  public position = model<keyof ModalPositions>('center');
  public isDismissable = model<boolean>(false);
  public isOpen = model<boolean>(false);
  public customStyle = model<DeepPartial<ModalTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): ModalClass {
    return this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.isOpen()),
      size: this.size(),
      position: this.position(),
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    // close modal if it's not destroyed on route change
    this.router.events
      .pipe(
        takeUntil(this.destroyed),
        filter(() => this.isOpen()),
        filter((event) => event instanceof NavigationStart)
      )
      .subscribe(() => this.close());
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
    this.isOpen.set(true);
    this.changeBackdrop();
  }

  close() {
    this.isOpen.set(false);
    this.changeBackdrop();
  }

  toggle() {
    this.isOpen.set(!this.isOpen());
    this.changeBackdrop();
  }

  // If isOpen changes, add or remove template
  changeBackdrop() {
    if (this.isOpen()) {
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

  onKeydownHandler(event: KeyboardEvent) {
    console.log('hello');
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
