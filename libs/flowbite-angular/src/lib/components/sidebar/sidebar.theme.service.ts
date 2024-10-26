import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { SidebarClass, SidebarProperties, SidebarTheme } from './sidebar.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_THEME_TOKEN = new InjectionToken<SidebarTheme>(
  'FLOWBITE_SIDEBAR_THEME_TOKEN'
);

export class SidebarThemeService implements FlowbiteThemeService<SidebarProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_THEME_TOKEN);

  public getClasses(properties: SidebarProperties): SidebarClass {
    const theme: SidebarTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarClass = {
      rootClass: twMerge(theme.root.base, theme.root.isRounded[properties.isRounded]),
    };

    return output;
  }
}
