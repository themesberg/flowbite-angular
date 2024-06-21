import { FlowbiteThemeService } from '../../common';
import {
  NabvarItemProperties,
  NavbarItemBaseTheme,
  NavbarItemClass,
} from './navbar-item.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_ITEM_THEME_TOKEN =
  new InjectionToken<NavbarItemBaseTheme>('FLOWBITE_NAVBAR_ITEM_THEME_TOKEN');

export class NavbarItemThemeService
  implements FlowbiteThemeService<NabvarItemProperties>
{
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_ITEM_THEME_TOKEN);

  public getClasses(properties: NabvarItemProperties): NavbarItemClass {
    const theme: NavbarItemBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: NavbarItemClass = {
      rootClass: twMerge(theme.root.base, theme.root.color?.[properties.color]),
    };

    return output;
  }
}
