import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { DropdownHeaderBaseTheme, DropdownHeaderClass, DropdownHeaderProperties } from './dropdown-header.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN = new InjectionToken<DropdownHeaderBaseTheme>(
  'FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN',
);

export class DropdownHeaderThemeService implements FlowbiteThemeService<DropdownHeaderProperties> {
  private readonly baseTheme = inject(FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN);

  public getClasses(properties: DropdownHeaderProperties): DropdownHeaderClass {
    const theme: DropdownHeaderBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: DropdownHeaderClass = {
      rootClass: '',
      root: twMerge(theme.base),
    };

    return output;
  }
}
