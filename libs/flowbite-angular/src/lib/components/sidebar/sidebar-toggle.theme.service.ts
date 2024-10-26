import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type {
  SidebarToggleClass,
  SidebarToggleProperties,
  SidebarToggleTheme,
} from './sidebar-toggle.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN = new InjectionToken<SidebarToggleTheme>(
  'FLOWBITE_TOGGLE_SIDEBAR_THEME_TOKEN'
);

export class SidebarToggleThemeService implements FlowbiteThemeService<SidebarToggleProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN);

  public getClasses(properties: SidebarToggleProperties): SidebarToggleClass {
    const theme: SidebarToggleTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarToggleClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color[properties.color],
        theme.root.size[properties.color]
      ),
    };

    return output;
  }
}
