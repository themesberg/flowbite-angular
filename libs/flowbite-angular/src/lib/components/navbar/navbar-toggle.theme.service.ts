import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { NavbarToggleBaseTheme, NavbarToggleClass, NavbarToggleProperties } from './navbar-toggle.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN = new InjectionToken<NavbarToggleBaseTheme>(
  'FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN',
);

export class NavbarToggleThemeService implements FlowbiteThemeService<NavbarToggleProperties> {
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN);

  public getClasses(properties: NavbarToggleProperties): NavbarToggleClass {
    const theme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarToggleClass = {
      rootClass: twMerge(theme.base),
    };

    return output;
  }
}
