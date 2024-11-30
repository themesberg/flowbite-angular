import type { ModalBodyClass, ModalBodyTheme } from './modal-body.theme';
import { ModalBodyThemeService } from './modal-body.theme.service';
import { ModalComponent } from './modal.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_MODAL_BODY_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<ModalBodyTheme>
>('FLOWBITE_MODAL_BODY_CUSTOM_STYLE_DEFAULT_VALUE');

export const modalBodyDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_MODAL_BODY_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/modal/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-body',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBodyComponent extends BaseComponent<ModalBodyClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(ModalBodyThemeService);
  /**
   * The parent `ModalComponent`
   */
  public readonly modalComponent = inject(ModalComponent);

  //#region properties
  /**
   * Set the custom style for this modal body
   */
  public customStyle = model(inject(FLOWBITE_MODAL_BODY_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): ModalBodyClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
