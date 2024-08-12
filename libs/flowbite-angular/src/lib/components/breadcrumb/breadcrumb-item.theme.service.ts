import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { BreadcrumbItemClass, BreadcrumbItemProperties, BreadcrumbItemTheme } from './breadcrumb-item.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN = new InjectionToken<BreadcrumbItemTheme>(
  'FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN',
);

export class BreadcrumbItemThemeService implements FlowbiteThemeService<BreadcrumbItemProperties> {
  private readonly baseTheme = inject(FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN);

  public getClasses(properties: BreadcrumbItemProperties): BreadcrumbItemClass {
    const theme: BreadcrumbItemTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: BreadcrumbItemClass = {
      rootClass: twMerge(theme.root.base, theme.root.href[properties.link ? 'enabled' : 'disabled']),
      breadcrumbIconClass: twMerge(theme.icon.base),
    };

    return output;
  }
}
