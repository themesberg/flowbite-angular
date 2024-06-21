import { FlowbiteThemeService } from '../../common';
import {
  SidebarItemGroupBaseTheme,
  SidebarItemGroupClass,
  SidebarItemGroupProperties,
} from './sidebar-item-group.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN =
  new InjectionToken<SidebarItemGroupBaseTheme>(
    'FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN',
  );

export class SidebarItemGroupThemeService
  implements FlowbiteThemeService<SidebarItemGroupProperties>
{
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN);

  public getClasses(
    properties: SidebarItemGroupProperties,
  ): SidebarItemGroupClass {
    const theme: SidebarItemGroupBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: SidebarItemGroupClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
