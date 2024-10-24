import type { FlowbiteThemeService } from '../../../services';
import { mergeTheme } from '../../../utils/theme/merge-theme';
import type { AddonDirectiveBaseTheme, AddonDirectiveClass, AddonDirectiveProperties } from './addon.directive.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN = new InjectionToken<AddonDirectiveBaseTheme>(
  'FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN',
);

export class AddonDirectiveThemeService implements FlowbiteThemeService<AddonDirectiveProperties> {
  private readonly baseTheme = inject(FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN);

  public getClasses(properties: AddonDirectiveProperties): AddonDirectiveClass {
    const theme: AddonDirectiveBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AddonDirectiveClass = {
      rootClass: twMerge(theme.base),
    };

    return output;
  }
}
