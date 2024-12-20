import type { PaginationClass, PaginationProperties, PaginationTheme } from './pagination.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `PaginationTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_PAGINATION_THEME)
 * ```
 */
export const FLOWBITE_PAGINATION_THEME_TOKEN = new InjectionToken<PaginationTheme>(
  'FLOWBITE_PAGINATION_THEME'
);

@Injectable({
  providedIn: 'root',
})
export class PaginationThemeService implements FlowbiteThemeService<PaginationProperties> {
  public readonly baseTheme = inject(FLOWBITE_PAGINATION_THEME_TOKEN);

  public getClasses(properties: PaginationProperties): PaginationClass {
    const theme: PaginationTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: PaginationClass = {
      rootClass: twMerge(theme.root.base),
      navigationClass: twMerge(theme.navigation.base, theme.navigation.size[properties.size]),
      iconClass: twMerge(theme.icon.size[properties.size]),
    };

    return output;
  }
}
