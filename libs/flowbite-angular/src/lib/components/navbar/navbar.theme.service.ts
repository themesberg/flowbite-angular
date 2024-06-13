import { FlowbiteThemeService } from '../../common';
import { NavbarBaseTheme, NavbarClass, NavbarProperties } from './navbar.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_THEME_TOKEN = new InjectionToken<NavbarBaseTheme>(
  'FLOWBITE_NAVBAR_THEME_TOKEN',
);

export class NavbarThemeService
  implements FlowbiteThemeService<NavbarProperties>
{
  private baseTheme = inject(FLOWBITE_NAVBAR_THEME_TOKEN);

  public getClasses(properties: NavbarProperties): NavbarClass {
    const theme: NavbarBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: NavbarClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color?.['gray'],
        theme.root.rounded?.[properties.rounded],
        theme.root.border?.[properties.border],
        theme.root.fixed?.[properties.fixed],
      ),
      contentClass: twMerge(theme.content.base),
    };

    return output;
  }
}
