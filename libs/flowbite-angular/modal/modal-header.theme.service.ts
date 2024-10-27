import type {
  ModalHeaderClass,
  ModalHeaderProperties,
  ModalHeaderTheme,
} from './modal-header.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_MODAL_HEADER_THEME_TOKEN = new InjectionToken<ModalHeaderTheme>(
  'FLOWBITE_MODAL_HEADER_THEME_TOKEN'
);

export class ModalHeaderThemeService implements FlowbiteThemeService<ModalHeaderProperties> {
  private readonly baseTheme = inject(FLOWBITE_MODAL_HEADER_THEME_TOKEN);

  public getClasses(properties: ModalHeaderProperties): ModalHeaderClass {
    const theme: ModalHeaderTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ModalHeaderClass = {
      rootClass: twMerge(theme.root.base),
      modalHeaderTitleClass: twMerge(theme.title.base),
      modalHeaderButtonClass: twMerge(theme.button.base),
    };

    return output;
  }
}
