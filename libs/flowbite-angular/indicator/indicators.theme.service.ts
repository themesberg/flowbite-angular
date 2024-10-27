import type { indicatorClass, IndicatorProperties, IndicatorTheme } from './indicators.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_INDICATOR_THEME_TOKEN = new InjectionToken<IndicatorTheme>(
  'FLOWBITE_INDICATOR_THEME_TOKEN'
);

export class IndicatorThemeService implements FlowbiteThemeService<IndicatorProperties> {
  private readonly baseTheme = inject(FLOWBITE_INDICATOR_THEME_TOKEN);

  public getClasses(properties: IndicatorProperties): indicatorClass {
    const theme: IndicatorTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: indicatorClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.hasBorder[properties.hasBorder],
        theme.root.color[properties.color],
        theme.root.isDisabled[properties.isDisabled],
        properties.placement &&
          properties.hasOffset == 'enabled' &&
          theme.root.hasOffset[properties.placement],
        theme.root.isOutline[properties.isOutline],
        theme.root.isPill[properties.isPill],
        properties.placement && 'absolute ' + theme.root.placement[properties.placement],
        theme.root.isRounded[properties.isRounded],
        theme.root.size[properties.size]
      ),
    };

    return output;
  }
}
