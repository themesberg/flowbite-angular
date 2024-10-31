import type { BreadcrumbClass, BreadcrumbProperties, BreadcrumbTheme } from './breadcrumb.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BREADCRUMB_THEME_TOKEN = new InjectionToken<BreadcrumbTheme>(
  'FLOWBITE_BREADCRUMB_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
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
