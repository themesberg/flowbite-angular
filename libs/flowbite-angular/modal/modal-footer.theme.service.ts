import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type {
  ModalFooterClass,
  ModalFooterProperties,
  ModalFooterTheme,
} from './modal-footer.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_MODAL_FOOTER_THEME_TOKEN = new InjectionToken<ModalFooterTheme>(
  'FLOWBITE_MODAL_FOOTER_THEME_TOKEN'
);

export class ModalFooterThemeService implements FlowbiteThemeService<ModalFooterProperties> {
  private readonly baseTheme = inject(FLOWBITE_MODAL_FOOTER_THEME_TOKEN);

  public getClasses(properties: ModalFooterProperties): ModalFooterClass {
    const theme: ModalFooterTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ModalFooterClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
