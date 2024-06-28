import { FlowbiteThemeService } from '../../common';
import {
  ModalBodyBaseTheme,
  ModalBodyClass,
  ModalBodyProperties,
} from './modal-body.theme';
import { mergeTheme } from '../../utils/theme/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_MODAL_BODY_THEME_TOKEN =
  new InjectionToken<ModalBodyBaseTheme>('FLOWBITE_MODAL_BODY_THEME_TOKEN');

export class ModalBodyThemeService
  implements FlowbiteThemeService<ModalBodyProperties>
{
  private readonly baseTheme = inject(FLOWBITE_MODAL_BODY_THEME_TOKEN);

  public getClasses(properties: ModalBodyProperties): ModalBodyClass {
    const theme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ModalBodyClass = {
      rootClass: twMerge(theme.base),
    };

    return output;
  }
}
