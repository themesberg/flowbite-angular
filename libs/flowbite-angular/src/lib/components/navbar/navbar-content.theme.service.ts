import { FlowbiteThemeService } from '../../common';
import {
  NavbarContentBaseTheme,
  NavbarContentClass,
  NavbarContentProperties,
} from './navbar-content.theme';
import { mergeTheme } from '../../utils/theme/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN =
  new InjectionToken<NavbarContentBaseTheme>(
    'FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN',
  );

export class NavbarContentThemeService
  implements FlowbiteThemeService<NavbarContentProperties>
{
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN);

  public getClasses(properties: NavbarContentProperties): NavbarContentClass {
    const theme: NavbarContentBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: NavbarContentClass = {
      rootClass: twMerge(theme.base, theme.isOpen?.[properties.isOpen]),
      navbarContentListClass: twMerge(theme.list.base),
    };

    return output;
  }
}
