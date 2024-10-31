import type {
  DropdownItemClass,
  DropdownItemProperties,
  DropdownItemTheme,
} from './dropdown-item.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN = new InjectionToken<DropdownItemTheme>(
  'FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class DropdownItemThemeService implements FlowbiteThemeService<DropdownItemProperties> {
  private readonly baseTheme = inject(FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN);

  public getClasses(properties: DropdownItemProperties): DropdownItemClass {
    const theme: DropdownItemTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: DropdownItemClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
