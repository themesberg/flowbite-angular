import type {
  NavbarBrandClass,
  NavbarBrandProperties,
  NavbarBrandTheme,
} from './navbar-brand.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_NAVBAR_BRAND_THEME_TOKEN = new InjectionToken<NavbarBrandTheme>(
  'FLOWBITE_NAVBAR_BRAND_THEME_TOKEN'
);

export class NavbarBrandThemeService implements FlowbiteThemeService<NavbarBrandProperties> {
  private readonly baseTheme = inject(FLOWBITE_NAVBAR_BRAND_THEME_TOKEN);

  public getClasses(properties: NavbarBrandProperties): NavbarBrandClass {
    const theme: NavbarBrandTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: NavbarBrandClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}