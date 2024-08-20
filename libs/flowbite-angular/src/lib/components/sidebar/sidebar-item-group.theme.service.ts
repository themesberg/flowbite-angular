import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type {
  SidebarItemGroupClass,
  SidebarItemGroupProperties,
  SidebarItemGroupTheme,
} from './sidebar-item-group.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN = new InjectionToken<SidebarItemGroupTheme>(
  'FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN',
);

export class SidebarItemGroupThemeService implements FlowbiteThemeService<SidebarItemGroupProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN);

  public getClasses(properties: SidebarItemGroupProperties): SidebarItemGroupClass {
    const theme: SidebarItemGroupTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarItemGroupClass = {
      rootClass: twMerge(theme.root.base),
      spanClass: twMerge(theme.spanText.base, theme.spanText.color[properties.color]),
    };

    return output;
  }
}
