import type {
  DropdownDividerClass,
  DropdownDividerProperties,
  DropdownDividerTheme,
} from './dropdown-divider.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `DropdownDividerTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_DROPDOWN_DIVIDER_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_DROPDOWN_DIVIDER_THEME_TOKEN = new InjectionToken<DropdownDividerTheme>(
  'FLOWBITE_DROPDOWN_DIVIDER_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class DropdownDividerThemeService
  implements FlowbiteThemeService<DropdownDividerProperties>
{
  private readonly baseTheme = inject(FLOWBITE_DROPDOWN_DIVIDER_THEME_TOKEN);

  public getClasses(properties: DropdownDividerProperties): DropdownDividerClass {
    const theme: DropdownDividerTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: DropdownDividerClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
