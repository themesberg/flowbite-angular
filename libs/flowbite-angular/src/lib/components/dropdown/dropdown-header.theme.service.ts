import {
  DropdownHeaderBaseTheme,
  DropdownHeaderClass,
  DropdownHeaderProperties,
} from './dropdown-header.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN =
  new InjectionToken<DropdownHeaderBaseTheme>(
    'FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN',
  );

export class DropdownHeaderThemeService
  implements FlowbiteThemeService<DropdownHeaderProperties>
{
  private readonly baseTheme = inject(FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN);

  public getClasses(properties: DropdownHeaderProperties): DropdownHeaderClass {
    const theme: DropdownHeaderBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: DropdownHeaderClass = {
      rootClass: '',
      root: twMerge(theme.root.base),
    };

    return output;
  }
}
