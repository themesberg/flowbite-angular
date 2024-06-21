import {
  DropdownItemBaseTheme,
  DropdownItemClass,
  DropdownItemProperties,
} from './dropdown-item.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN =
  new InjectionToken<DropdownItemBaseTheme>(
    'FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN',
  );

export class DropdownItemThemeService
  implements FlowbiteThemeService<DropdownItemProperties>
{
  private readonly baseTheme = inject(FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN);

  public getClasses(properties: DropdownItemProperties): DropdownItemClass {
    const theme: DropdownItemBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: DropdownItemClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
