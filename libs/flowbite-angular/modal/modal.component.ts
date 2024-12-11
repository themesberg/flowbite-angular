import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';
import { ModalHeaderComponent } from './modal-header.component';
import type { ModalClass, ModalPositions, ModalSizes, ModalTheme } from './modal.theme';
import { ModalThemeService } from './modal.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import type { EmbeddedViewRef, OnDestroy } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  TemplateRef,
  viewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

export const FLOWBITE_MODAL_SIZE_DEFAULT_VALUE = new InjectionToken<keyof ModalSizes>(
  'FLOWBITE_MODAL_SIZE_DEFAULT_VALUE'
);

export const FLOWBITE_MODAL_POSITION_DEFAULT_VALUE = new InjectionToken<keyof ModalPositions>(
  'FLOWBITE_MODAL_POSITION_DEFAULT_VALUE'
);

export const FLOWBITE_MODAL_IS_DISMISSABLE_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_MODAL_IS_DISMISSABLE_DEFAULT_VALUE'
);

export const FLOWBITE_MODAL_IS_OPEN_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_MODAL_IS_OPEN_DEFAULT_VALUE'
);

export const FLOWBITE_MODAL_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<ModalTheme>
>('FLOWBITE_MODAL_CUSTOM_STYLE_DEFAULT_VALUE');

export const modalDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_MODAL_SIZE_DEFAULT_VALUE,
    useValue: 'md',
  },
  {
    provide: FLOWBITE_MODAL_POSITION_DEFAULT_VALUE,
    useValue: 'center',
  },
  {
    provide: FLOWBITE_MODAL_IS_DISMISSABLE_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_MODAL_IS_OPEN_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_MODAL_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/modal/
 */
@Component({
  standalone: true,
  selector: 'flowbite-modal',
  template: `
    <ng-template #modal>
      <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[99]"></div>

      <div
        [class]="contentClasses().modalWrapperClass"
        (click)="onBackdropClick($event)">
        <div [class]="contentClasses().modalContainerClass">
          <div [class]="contentClasses().modalContentClass">
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent extends BaseComponent<ModalClass> implements OnDestroy {
  private readonly destroyed = new Subject<void>();

  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(ModalThemeService);
  /**
   * The child `ModalHeaderComponent`
   */
  public readonly modalHeaderChild = contentChild(ModalHeaderComponent);
  /**
   * The child `ModalBodyComponent`
   */
  public readonly modalBodyChild = contentChild.required(ModalBodyComponent);
  /**
   * The child `ModalFooterComponent`
   */
  public readonly modalFooterChild = contentChild(ModalFooterComponent);

  //#region template properties
  private readonly template = viewChild.required('modal', { read: TemplateRef });

  private readonly viewContainer = inject(ViewContainerRef);
  private readonly router = inject(Router);

  private embeddedView?: EmbeddedViewRef<unknown>;
  //#endregion

  //#region properties
  /**
   * Set the modal size
   *
   * @default md
   */
  public size = model(inject(FLOWBITE_MODAL_SIZE_DEFAULT_VALUE));
  /**
   * Set the modal position
   *
   * @default center
   */
  public position = model(inject(FLOWBITE_MODAL_POSITION_DEFAULT_VALUE));
  /**
   * Set if the modal is dismissable
   *
   * @default false
   */
  public isDismissable = model(inject(FLOWBITE_MODAL_IS_DISMISSABLE_DEFAULT_VALUE));
  /**
   * Set if the modal is open
   *
   * @default false
   */
  public isOpen = model(inject(FLOWBITE_MODAL_IS_OPEN_DEFAULT_VALUE));
  /**
   * Set the custom style for this modal
   */
  public customStyle = model(inject(FLOWBITE_MODAL_CUSTOM_STYLE_DEFAULT_VALUE));
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
