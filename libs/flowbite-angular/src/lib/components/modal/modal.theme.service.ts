import { FlowbiteThemeService } from '../../common';
import { ModalBaseTheme, ModalClass, ModalProperties } from './modal.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_MODAL_THEME_TOKEN = new InjectionToken<ModalBaseTheme>(
  'FLOWBITE_MODAL_THEME_TOKEN',
);

export class ModalThemeService
  implements FlowbiteThemeService<ModalProperties>
{
  private baseTheme = inject(FLOWBITE_MODAL_THEME_TOKEN);

  public getClasses(properties: ModalProperties): ModalClass {
    const theme: ModalBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: ModalClass = {
      rootClass: '',
      modalClass: twMerge(
        theme.root.base,
        theme.root.position?.[properties.position],
      ),
      modalContainerClass: twMerge(
        theme.container.base,
        theme.container.size?.[properties.size],
      ),
      modalContentClass: twMerge(theme.content.base),
    };

    return output;
  }
}
