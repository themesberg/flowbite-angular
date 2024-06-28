import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { ModalHeaderBaseTheme, ModalHeaderClass, ModalHeaderProperties } from './modal-header.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_MODAL_HEADER_THEME_TOKEN = new InjectionToken<ModalHeaderBaseTheme>(
  'FLOWBITE_MODAL_HEADER_THEME_TOKEN',
);

export class ModalHeaderThemeService implements FlowbiteThemeService<ModalHeaderProperties> {
  private readonly baseTheme = inject(FLOWBITE_MODAL_HEADER_THEME_TOKEN);

  public getClasses(properties: ModalHeaderProperties): ModalHeaderClass {
    const theme: ModalHeaderBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ModalHeaderClass = {
      rootClass: twMerge(theme.base),
      modalHeaderTitleClass: twMerge(theme.title.base),
      modalHeaderButtonClass: twMerge(theme.button.base),
    };

    return output;
  }
}
