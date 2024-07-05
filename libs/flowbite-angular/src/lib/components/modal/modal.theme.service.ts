import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { ModalBaseTheme, ModalClass, ModalProperties } from './modal.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_MODAL_THEME_TOKEN = new InjectionToken<ModalBaseTheme>('FLOWBITE_MODAL_THEME_TOKEN');

export class ModalThemeService implements FlowbiteThemeService<ModalProperties> {
  private readonly baseTheme = inject(FLOWBITE_MODAL_THEME_TOKEN);

  public getClasses(properties: ModalProperties): ModalClass {
    const theme: ModalBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ModalClass = {
      rootClass: twMerge(theme.base, theme.isOpen[properties.isOpen], theme.position[properties.position]),
      modalContainerClass: twMerge(theme.container.base, theme.container.size?.[properties.size]),
      modalContentClass: twMerge(theme.content.base),
    };

    return output;
  }
}