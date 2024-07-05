import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { NabvarItemProperties, NavbarItemBaseTheme, NavbarItemClass } from './navbar-item.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_ITEM_THEME_TOKEN = new InjectionToken<NavbarItemBaseTheme>(
  'FLOWBITE_NAVBAR_ITEM_THEME_TOKEN',
);

export class NavbarItemThemeService implements FlowbiteThemeService<NabvarItemProperties> {
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_ITEM_THEME_TOKEN);

  public getClasses(properties: NabvarItemProperties): NavbarItemClass {
    const theme: NavbarItemBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarItemClass = {
      rootClass: twMerge(theme.base, theme.color[properties.color]),
    };

    return output;
  }
}