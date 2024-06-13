import { FlowbiteThemeService } from '../../common';
import {
  IndicatorBaseTheme,
  IndicatorProperties,
  indicatorClass,
} from './indicators.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_INDICATOR_THEME_TOKEN =
  new InjectionToken<IndicatorBaseTheme>('FLOWBITE_INDICATOR_THEME_TOKEN');

export class IndicatorThemeService
  implements FlowbiteThemeService<IndicatorProperties>
{
  private baseTheme = inject(FLOWBITE_INDICATOR_THEME_TOKEN);

  public getClasses(properties: IndicatorProperties): indicatorClass {
    const theme: IndicatorBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: indicatorClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.border?.[properties.border],
        theme.root.color?.[properties.color],
        theme.root.disabled?.[properties.disabled],
        properties.placement &&
          properties.offset == 'enabled' &&
          theme.root.offset?.[properties.placement],
        theme.root.outline?.[properties.outline],
        theme.root.pill?.[properties.pill],
        properties.placement &&
          'absolute ' + theme.root.placement?.[properties.placement],
        theme.root.rounded?.[properties.rounded],
        theme.root.size?.[properties.size],
      ),
    };

    return output;
  }
}
