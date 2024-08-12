import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { NavbarContentClass, NavbarContentProperties, NavbarContentTheme } from './navbar-content.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN = new InjectionToken<NavbarContentTheme>(
  'FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN',
);

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
