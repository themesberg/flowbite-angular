import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { ModalFooterBaseTheme, ModalFooterClass, ModalFooterProperties } from './modal-footer.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_MODAL_FOOTER_THEME_TOKEN = new InjectionToken<ModalFooterBaseTheme>(
  'FLOWBITE_MODAL_FOOTER_THEME_TOKEN',
);

export class ModalFooterThemeService implements FlowbiteThemeService<ModalFooterProperties> {
  private readonly baseTheme = inject(FLOWBITE_MODAL_FOOTER_THEME_TOKEN);

  public getClasses(properties: ModalFooterProperties): ModalFooterClass {
    const theme: ModalFooterBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ModalFooterClass = {
      rootClass: twMerge(theme.base),
    };

    return output;
  }
}