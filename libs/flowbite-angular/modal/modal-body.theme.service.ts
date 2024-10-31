import type { ModalBodyClass, ModalBodyProperties, ModalBodyTheme } from './modal-body.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `ModalBodyTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_MODAL_BODY_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_MODAL_BODY_THEME_TOKEN = new InjectionToken<ModalBodyTheme>(
  'FLOWBITE_MODAL_BODY_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class ModalBodyThemeService implements FlowbiteThemeService<ModalBodyProperties> {
  private readonly baseTheme = inject(FLOWBITE_MODAL_BODY_THEME_TOKEN);

  public getClasses(properties: ModalBodyProperties): ModalBodyClass {
    const theme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ModalBodyClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
