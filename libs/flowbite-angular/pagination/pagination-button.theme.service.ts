import type {
  PaginationButtonClass,
  PaginationButtonProperties,
  PaginationButtonTheme,
} from './pagination-button.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `PaginationButtonTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_PAGINATION_BUTTON_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_PAGINATION_BUTTON_THEME_TOKEN = new InjectionToken<PaginationButtonTheme>(
  'FLOWBITE_PAGINATION_BUTTON_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class PaginationButtonThemeService
  implements FlowbiteThemeService<PaginationButtonProperties>
{
  public readonly baseTheme = inject(FLOWBITE_PAGINATION_BUTTON_THEME_TOKEN);

  public getClasses(properties: PaginationButtonProperties): PaginationButtonClass {
    const theme: PaginationButtonTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: PaginationButtonClass = {
      rootClass: twMerge(theme.root.base, theme.root.active[properties.active]),
    };

    return output;
  }
}
