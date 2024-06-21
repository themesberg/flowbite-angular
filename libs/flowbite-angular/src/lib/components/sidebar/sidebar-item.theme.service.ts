import { FlowbiteThemeService } from '../../common';
import {
  SidebarItemBaseTheme,
  SidebarItemClass,
  SidebarItemProperties,
} from './sidebar-item.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN =
  new InjectionToken<SidebarItemBaseTheme>('FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN');

export class SidebarItemThemeService
  implements FlowbiteThemeService<SidebarItemProperties>
{
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN);

  public getClasses(properties: SidebarItemProperties): SidebarItemClass {
    const theme: SidebarItemBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: SidebarItemClass = {
      rootClass: twMerge(theme.root.base),
      sidebarIconClass: twMerge(theme.icon.base),
    };

    return output;
  }
}
