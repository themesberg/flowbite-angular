import type {
  SidebarItemGroupClass,
  SidebarItemGroupProperties,
  SidebarItemGroupTheme,
} from './sidebar-item-group.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `SidebarItemGroupTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN = new InjectionToken<SidebarItemGroupTheme>(
  'FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class SidebarItemGroupThemeService
  implements FlowbiteThemeService<SidebarItemGroupProperties>
{
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN);

  public getClasses(properties: SidebarItemGroupProperties): SidebarItemGroupClass {
    const theme: SidebarItemGroupTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarItemGroupClass = {
      rootClass: twMerge(theme.root.base),
      buttonClass: twMerge(theme.buttonText.base, theme.buttonText.color[properties.color]),
      listClass: twMerge(theme.list.base, theme.list.isOpen[properties.isOpen]),
    };

    return output;
  }
}
