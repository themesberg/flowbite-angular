import { FlowbiteThemeService } from '../../common';
import {
  SidebarBaseTheme,
  SidebarClass,
  SidebarProperties,
} from './sidebar.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_THEME_TOKEN =
  new InjectionToken<SidebarBaseTheme>('FLOWBITE_SIDEBAR_THEME_TOKEN');

export class SidebarThemeService
  implements FlowbiteThemeService<SidebarProperties>
{
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_THEME_TOKEN);

  public getClasses(properties: SidebarProperties): SidebarClass {
    const theme: SidebarBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: SidebarClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.isRounded?.[properties.isRounded],
      ),
    };

    return output;
  }
}
