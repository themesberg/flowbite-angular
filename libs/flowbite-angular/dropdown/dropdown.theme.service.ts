import type { DropdownClass, DropdownProperties, DropdownTheme } from './dropdown.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `DropdownTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_DROPDOWN_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_DROPDOWN_THEME_TOKEN = new InjectionToken<DropdownTheme>(
  'FLOWBITE_DROPDOWN_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class DropdownThemeService implements FlowbiteThemeService<DropdownProperties> {
  private readonly baseTheme = inject(FLOWBITE_DROPDOWN_THEME_TOKEN);

  public getClasses(properties: DropdownProperties): DropdownClass {
    const theme: DropdownTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: DropdownClass = {
      rootClass: twMerge(theme.root.base),
      dropdownClass: twMerge(theme.dropdown.base),
      spanClass: twMerge(theme.span.base),
      containerClass: twMerge(
        theme.container.base,
        theme.container.isOpen[properties.isOpen],
        theme.container.placement[properties.placement]
      ),
      contentClass: twMerge(theme.content.base),
      subContentClass: twMerge(theme.subContent.base),
    };

    return output;
  }
}
