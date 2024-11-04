import type {
  DarkThemeToggleClass,
  DarkThemeToggleProperties,
  DarkThemeToggleTheme,
} from './dark-theme-toggle.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `DarkThemeToggleTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN = new InjectionToken<DarkThemeToggleTheme>(
  'FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class DarkThemeToggleThemeService
  implements FlowbiteThemeService<DarkThemeToggleProperties>
{
  private readonly baseTheme = inject(FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN);

  public getClasses(properties: DarkThemeToggleProperties): DarkThemeToggleClass {
    const theme: DarkThemeToggleTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: DarkThemeToggleClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
