import {
  BreadcrumbBaseTheme,
  BreadcrumbClass,
  BreadcrumbProperties,
} from './breadcrumb.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BREADCRUMB_THEME_TOKEN =
  new InjectionToken<BreadcrumbBaseTheme>('FLOWBITE_BREADCRUMB_THEME_TOKEN');

export class BreadcrumbThemeService
  implements FlowbiteThemeService<BreadcrumbProperties>
{
  private baseTheme = inject(FLOWBITE_BREADCRUMB_THEME_TOKEN);

  public getClasses(properties: BreadcrumbProperties): BreadcrumbClass {
    const theme: BreadcrumbBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: BreadcrumbClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
