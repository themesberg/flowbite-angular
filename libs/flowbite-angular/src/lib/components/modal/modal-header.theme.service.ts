import { FlowbiteThemeService } from '../../common';
import {
  ModalHeaderBaseTheme,
  ModalHeaderClass,
  ModalHeaderProperties,
} from './modal-header.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_MODAL_HEADER_THEME_TOKEN =
  new InjectionToken<ModalHeaderBaseTheme>('FLOWBITE_MODAL_HEADER_THEME_TOKEN');

export class ModalHeaderThemeService
  implements FlowbiteThemeService<ModalHeaderProperties>
{
  private baseTheme = inject(FLOWBITE_MODAL_HEADER_THEME_TOKEN);

  public getClasses(properties: ModalHeaderProperties): ModalHeaderClass {
    const theme: ModalHeaderBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: ModalHeaderClass = {
      rootClass: twMerge(theme.root.base),
      modalHeaderTitleClass: twMerge(theme.title.base),
      modalHeaderButtonClass: twMerge(theme.button.base),
    };

    return output;
  }
}
