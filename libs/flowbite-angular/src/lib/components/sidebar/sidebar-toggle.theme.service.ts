import { FlowbiteThemeService } from '../../common';
import {
  SidebarToggleBaseTheme,
  SidebarToggleClass,
  SidebarToggleProperties,
} from './sidebar-toggle.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN =
  new InjectionToken<SidebarToggleBaseTheme>(
    'FLOWBITE_TOGGLE_SIDEBAR_THEME_TOKEN',
  );

export class SidebarToggleThemeService
  implements FlowbiteThemeService<SidebarToggleProperties>
{
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN);

  public getClasses(properties: SidebarToggleProperties): SidebarToggleClass {
    const theme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarToggleClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.isCollapsed?.[properties.isCollapsed],
      ),
    };

    return output;
  }
}
