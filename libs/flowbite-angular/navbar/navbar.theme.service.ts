import type { NavbarClass, NavbarProperties, NavbarTheme } from './navbar.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `NavbarTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_NAVBAR_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_NAVBAR_THEME_TOKEN = new InjectionToken<NavbarTheme>(
  'FLOWBITE_NAVBAR_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class NavbarThemeService implements FlowbiteThemeService<NavbarProperties> {
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_THEME_TOKEN);

  public getClasses(properties: NavbarProperties): NavbarClass {
    const theme: NavbarTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color['gray'],
        theme.root.isRounded[properties.isRounded],
        theme.root.hasBorder[properties.hasBorder],
        theme.root.isFixed[properties.isFixed]
      ),
    };

    return output;
  }
}
