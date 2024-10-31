import type {
  NavbarToggleClass,
  NavbarToggleProperties,
  NavbarToggleTheme,
} from './navbar-toggle.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN = new InjectionToken<NavbarToggleTheme>(
  'FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class NavbarToggleThemeService implements FlowbiteThemeService<NavbarToggleProperties> {
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN);

  public getClasses(properties: NavbarToggleProperties): NavbarToggleClass {
    const theme: NavbarToggleTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarToggleClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
