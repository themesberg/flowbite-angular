import type { ModalFooterClass, ModalFooterTheme } from './modal-footer.theme';
import { ModalFooterThemeService } from './modal-footer.theme.service';
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

export const FLOWBITE_MODAL_FOOTER_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<ModalFooterTheme>
>('FLOWBITE_MODAL_FOOTER_CUSTOM_STYLE_DEFAULT_VALUE');

export const modalFooterDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_MODAL_FOOTER_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/modal/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-footer',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFooterComponent extends BaseComponent<ModalFooterClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(ModalFooterThemeService);
  /**
   * The parent `ModalComponent`
   */
  public readonly modalComponent = inject(ModalComponent);

  //#region properties
  /**
   * Set the custom style for this modal footer
   */
  public customStyle = model(inject(FLOWBITE_MODAL_FOOTER_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): ModalFooterClass {
    return this.themeService.getClasses({
      customStyle: this.customStyle(),
    });
  }
  //#endregion
}
