import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';
import { ModalHeaderComponent } from './modal-header.component';
import type { ModalClass, ModalPositions, ModalSizes, ModalTheme } from './modal.theme';
import { ModalThemeService } from './modal.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import type { EmbeddedViewRef } from '@angular/core';
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationStart, Router } from '@angular/router';

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
export class ModalComponent extends BaseComponent<ModalClass> {
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

  //#region constructor
  constructor() {
    super();

    // close modal if it's not destroyed on route change
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (this.isOpen() && event instanceof NavigationStart) {
        this.close();
      }
    });
  }
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
  //#endregion

  public open(): void {
    this.isOpen.set(true);
    this.changeBackdrop();
  }

  public close(): void {
    this.isOpen.set(false);
    this.changeBackdrop();
  }

  public toggle(): void {
    this.isOpen.set(!this.isOpen());
    this.changeBackdrop();
  }

  // If isOpen changes, add or remove template
  public changeBackdrop(): void {
    if (this.isOpen()) {
      this.createTemplate();
    } else {
      this.destroyTemplate();
    }
  }

  protected onKeydownHandler(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target == event.currentTarget && this.isDismissable()) {
      this.close();
    }
  }

  private createTemplate(): void {
    if (this.embeddedView) {
      this.destroyTemplate();
    }

    this.embeddedView = this.viewContainer.createEmbeddedView(this.template());
  }

  private destroyTemplate(): void {
    this.embeddedView?.destroy();
  }
}
