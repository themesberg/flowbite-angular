import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { NavbarBaseTheme, NavbarClass, NavbarProperties } from './navbar.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_THEME_TOKEN = new InjectionToken<NavbarBaseTheme>('FLOWBITE_NAVBAR_THEME_TOKEN');

export class NavbarThemeService implements FlowbiteThemeService<NavbarProperties> {
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_THEME_TOKEN);

  public getClasses(properties: NavbarProperties): NavbarClass {
    const theme: NavbarBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarClass = {
      rootClass: twMerge(
        theme.base,
        theme.color['gray'],
        theme.isRounded[properties.isRounded],
        theme.hasBorder[properties.hasBorder],
        theme.isFixed[properties.isFixed],
      ),
    };

    return output;
  }
}
