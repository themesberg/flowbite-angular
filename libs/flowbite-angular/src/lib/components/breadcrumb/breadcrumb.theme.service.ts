import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { BreadcrumbClass, BreadcrumbProperties, BreadcrumbTheme } from './breadcrumb.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BREADCRUMB_THEME_TOKEN = new InjectionToken<BreadcrumbTheme>('FLOWBITE_BREADCRUMB_THEME_TOKEN');

export class BreadcrumbThemeService implements FlowbiteThemeService<BreadcrumbProperties> {
  private readonly baseTheme = inject(FLOWBITE_BREADCRUMB_THEME_TOKEN);

  public getClasses(properties: BreadcrumbProperties): BreadcrumbClass {
    const theme: BreadcrumbTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: BreadcrumbClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
