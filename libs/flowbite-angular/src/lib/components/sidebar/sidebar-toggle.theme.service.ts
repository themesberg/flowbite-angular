import { FlowbiteThemeService } from '../../common';
import {
  SidebarToggleBaseTheme,
  SidebarToggleClass,
  SidebarToggleProperties,
} from './sidebar-toggle.theme';
import { mergeTheme } from '../../utils/theme/merge-theme';

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
        theme.base,
        theme.color?.[properties.color],
        theme.size?.[properties.color],
      ),
    };

    return output;
  }
}
