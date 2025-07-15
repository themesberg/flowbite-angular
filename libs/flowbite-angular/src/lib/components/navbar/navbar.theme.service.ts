import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { NavbarClass, NavbarProperties, NavbarTheme } from './navbar.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_THEME_TOKEN = new InjectionToken<NavbarTheme>('FLOWBITE_NAVBAR_THEME_TOKEN');

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
        theme.root.isFixed[properties.isFixed],
      ),
    };

    return output;
  }
}
