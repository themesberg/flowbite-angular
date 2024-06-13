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
  private baseTheme = inject(FLOWBITE_SIDEBAR_THEME_TOKEN);

  public getClasses(properties: SidebarProperties): SidebarClass {
    const theme: SidebarBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: SidebarClass = {
      rootClass: '',
      sidebarClass: twMerge(theme.root.base),
      sidebarContentClass: twMerge(
        theme.content.base,
        theme.content.rounded?.[properties.rounded],
      ),
    };

    return output;
  }
}
