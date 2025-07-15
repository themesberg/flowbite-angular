import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { DropdownHeaderClass, DropdownHeaderProperties, DropdownHeaderTheme } from './dropdown-header.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN = new InjectionToken<DropdownHeaderTheme>(
  'FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN',
);

export class DropdownHeaderThemeService implements FlowbiteThemeService<DropdownHeaderProperties> {
  private readonly baseTheme = inject(FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN);

  public getClasses(properties: DropdownHeaderProperties): DropdownHeaderClass {
    const theme: DropdownHeaderTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: DropdownHeaderClass = {
      rootClass: twMerge(theme.root.base),
      root: twMerge(theme.content.base),
    };

    return output;
  }
}
