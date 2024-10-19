import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { SidebarItemClass, SidebarItemProperties, SidebarItemTheme } from './sidebar-item.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN = new InjectionToken<SidebarItemTheme>(
  'FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN',
);

export class SidebarItemThemeService implements FlowbiteThemeService<SidebarItemProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN);

  public getClasses(properties: SidebarItemProperties): SidebarItemClass {
    const theme: SidebarItemTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarItemClass = {
      rootClass: twMerge(theme.root.base, theme.root.color[properties.color]),
      sidebarIconClass: twMerge(theme.icon.base),
    };

    return output;
  }
}
