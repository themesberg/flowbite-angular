import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils';
import type {
  SidebarPageContentClass,
  SidebarPageContentProperties,
  SidebarPageContentTheme,
} from './sidebar-page-content.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SIDEBAR_PAGE_CONTENT_THEME_TOKEN = new InjectionToken<SidebarPageContentTheme>(
  'FLOWBITE_SIDEBAR_PAGE_CONTENT_THEME_TOKEN',
);

export class SidebarPageContentThemeService implements FlowbiteThemeService<SidebarPageContentProperties> {
  private readonly baseTheme = inject(FLOWBITE_SIDEBAR_PAGE_CONTENT_THEME_TOKEN);

  public getClasses(properties: SidebarPageContentProperties): SidebarPageContentClass {
    const theme: SidebarPageContentTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: SidebarPageContentClass = {
      rootClass: twMerge(
        theme.root.base,
        properties.isOpen === 'enabled' && theme.root.displayMode[properties.displayMode],
      ),
    };

    return output;
  }
}
