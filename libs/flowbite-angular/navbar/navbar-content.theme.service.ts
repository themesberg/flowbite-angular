import type {
  NavbarContentClass,
  NavbarContentProperties,
  NavbarContentTheme,
} from './navbar-content.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `NavbarContentTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN = new InjectionToken<NavbarContentTheme>(
  'FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class NavbarContentThemeService implements FlowbiteThemeService<NavbarContentProperties> {
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN);

  public getClasses(properties: NavbarContentProperties): NavbarContentClass {
    const theme: NavbarContentTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarContentClass = {
      rootClass: twMerge(theme.root.base, theme.root.isOpen[properties.isOpen]),
      navbarContentListClass: twMerge(theme.list.base),
    };

    return output;
  }
}
