import {
  BreadcrumbItemBaseTheme,
  BreadcrumbItemClass,
  BreadcrumbItemProperties,
} from './breadcrumb-item.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN =
  new InjectionToken<BreadcrumbItemBaseTheme>(
    'FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN',
  );

export class BreadcrumbItemThemeService
  implements FlowbiteThemeService<BreadcrumbItemProperties>
{
  private readonly baseTheme = inject(FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN);

  public getClasses(properties: BreadcrumbItemProperties): BreadcrumbItemClass {
    const theme: BreadcrumbItemBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: BreadcrumbItemClass = {
      rootClass: twMerge(
        theme.base?.[properties.link ? 'enabled' : 'disabled'],
      ),
      breadcrumbIconClass: twMerge(theme.icon.base),
    };

    return output;
  }
}
