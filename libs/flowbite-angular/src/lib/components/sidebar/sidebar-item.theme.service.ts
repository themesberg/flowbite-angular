import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { SidebarItemBaseTheme, SidebarItemClass, SidebarItemProperties } from './sidebar-item.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN = new InjectionToken<SidebarItemBaseTheme>(
  'FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN',
);

export class SidebarItemThemeService implements FlowbiteThemeService<SidebarItemProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN);

  public getClasses(properties: SidebarItemProperties): SidebarItemClass {
    const theme: SidebarItemBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarItemClass = {
      rootClass: twMerge(theme.base),
      sidebarIconClass: twMerge(theme.icon.base),
    };

    return output;
  }
}
