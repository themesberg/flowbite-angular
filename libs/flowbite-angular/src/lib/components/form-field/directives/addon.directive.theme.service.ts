import {
  AddonDirectiveBaseTheme,
  AddonDirectiveClass,
  AddonDirectiveProperties,
} from './addon.directive.theme';
import { FlowbiteThemeService } from '../../../common';
import { mergeTheme } from '../../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN =
  new InjectionToken<AddonDirectiveBaseTheme>(
    'FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN',
  );

export class AddonDirectiveThemeService
  implements FlowbiteThemeService<AddonDirectiveProperties>
{
  private baseTheme = inject(FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN);

  public getClasses(properties: AddonDirectiveProperties): AddonDirectiveClass {
    const theme: AddonDirectiveBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: AddonDirectiveClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
