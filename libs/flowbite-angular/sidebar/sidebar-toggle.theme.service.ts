import type {
  SidebarToggleClass,
  SidebarToggleProperties,
  SidebarToggleTheme,
} from './sidebar-toggle.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `SidebarToggleTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN = new InjectionToken<SidebarToggleTheme>(
  'FLOWBITE_TOGGLE_SIDEBAR_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class SidebarToggleThemeService implements FlowbiteThemeService<SidebarToggleProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN);

  public getClasses(properties: SidebarToggleProperties): SidebarToggleClass {
    const theme: SidebarToggleTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarToggleClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color[properties.color],
        theme.root.size[properties.color]
      ),
    };

    return output;
  }
}
