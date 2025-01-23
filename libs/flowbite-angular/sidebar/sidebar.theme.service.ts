import type { SidebarClass, SidebarProperties, SidebarTheme } from './sidebar.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `SidebarTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_SIDEBAR_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_SIDEBAR_THEME_TOKEN = new InjectionToken<SidebarTheme>(
  'FLOWBITE_SIDEBAR_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class SidebarThemeService implements FlowbiteThemeService<SidebarProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_THEME_TOKEN);

  public getClasses(properties: SidebarProperties): SidebarClass {
    const theme: SidebarTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.isRounded[properties.isRounded],
        theme.root.isOpen[properties.isOpen],
        properties.isOpen === 'enabled' && theme.root.displayMode[properties.displayMode],
        theme.root.color[properties.color]
      ),
      containerClass: twMerge(theme.container.base),
      listClass: twMerge(theme.list.base),
    };

    return output;
  }
}
