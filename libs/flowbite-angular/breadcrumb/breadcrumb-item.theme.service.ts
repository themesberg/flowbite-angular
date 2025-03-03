import type {
  BreadcrumbItemClass,
  BreadcrumbItemProperties,
  BreadcrumbItemTheme,
} from './breadcrumb-item.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `BreadcrumbItemTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN = new InjectionToken<BreadcrumbItemTheme>(
  'FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbItemThemeService implements FlowbiteThemeService<BreadcrumbItemProperties> {
  private readonly baseTheme = inject(FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN);

  public getClasses(properties: BreadcrumbItemProperties): BreadcrumbItemClass {
    const theme: BreadcrumbItemTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: BreadcrumbItemClass = {
      rootClass: twMerge(theme.root.base),
      itemClass: twMerge(theme.item.base, theme.item.color[properties.color]),
      iconClass: twMerge(theme.icon.base),
    };

    return output;
  }
}
