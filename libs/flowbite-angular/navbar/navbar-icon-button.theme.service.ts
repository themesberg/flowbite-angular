import type {
  NavbarIconButtonClass,
  NavbarIconButtonProperties,
  NavbarIconButtonTheme,
} from './navbar-icon-button.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_ICON_BUTTON_THEME_TOKEN = new InjectionToken<NavbarIconButtonTheme>(
  'FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class NavbarIconButtonThemeService
  implements FlowbiteThemeService<NavbarIconButtonProperties>
{
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_ICON_BUTTON_THEME_TOKEN);

  public getClasses(properties: NavbarIconButtonProperties): NavbarIconButtonClass {
    const theme: NavbarIconButtonTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarIconButtonClass = {
      rootClass: twMerge(theme.root.base, theme.root.color[properties.color]),
    };

    return output;
  }
}
