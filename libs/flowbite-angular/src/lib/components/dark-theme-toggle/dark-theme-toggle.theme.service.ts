import {
  DarkThemeToggleBaseTheme,
  DarkThemeToggleClass,
  DarkThemeToggleProperties,
} from './dark-theme-toggle.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN =
  new InjectionToken<DarkThemeToggleBaseTheme>(
    'FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN',
  );

export class DarkThemeToggleThemeService
  implements FlowbiteThemeService<DarkThemeToggleProperties>
{
  private readonly baseTheme = inject(FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN);

  public getClasses(
    properties: DarkThemeToggleProperties,
  ): DarkThemeToggleClass {
    const theme: DarkThemeToggleBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: DarkThemeToggleClass = {
      rootClass: twMerge(theme.button.base),
    };

    return output;
  }
}
