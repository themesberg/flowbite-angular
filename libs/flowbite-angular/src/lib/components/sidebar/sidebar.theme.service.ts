import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { SidebarBaseTheme, SidebarClass, SidebarProperties } from './sidebar.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_THEME_TOKEN = new InjectionToken<SidebarBaseTheme>('FLOWBITE_SIDEBAR_THEME_TOKEN');

export class SidebarThemeService implements FlowbiteThemeService<SidebarProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_THEME_TOKEN);

  public getClasses(properties: SidebarProperties): SidebarClass {
    const theme: SidebarBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarClass = {
      rootClass: twMerge(theme.base, theme.isRounded[properties.isRounded], theme.isOpen[properties.isOpen]),
    };

    return output;
  }
}
