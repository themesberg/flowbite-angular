import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { IndicatorBaseTheme, indicatorClass, IndicatorProperties } from './indicators.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_INDICATOR_THEME_TOKEN = new InjectionToken<IndicatorBaseTheme>('FLOWBITE_INDICATOR_THEME_TOKEN');

export class IndicatorThemeService implements FlowbiteThemeService<IndicatorProperties> {
  private readonly baseTheme = inject(FLOWBITE_INDICATOR_THEME_TOKEN);

  public getClasses(properties: IndicatorProperties): indicatorClass {
    const theme: IndicatorBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: indicatorClass = {
      rootClass: twMerge(
        theme.base,
        theme.hasBorder[properties.hasBorder],
        theme.color[properties.color],
        theme.isDisabled[properties.isDisabled],
        properties.placement && properties.hasOffset == 'enabled' && theme.hasOffset[properties.placement],
        theme.isOutline[properties.isOutline],
        theme.isPill[properties.isPill],
        properties.placement && 'absolute ' + theme.placement[properties.placement],
        theme.isRounded[properties.isRounded],
        theme.size[properties.size],
      ),
    };

    return output;
  }
}
