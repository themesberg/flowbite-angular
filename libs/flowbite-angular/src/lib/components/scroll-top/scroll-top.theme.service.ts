import { FlowbiteThemeService } from '../../common';
import {
  ScrollTopBaseTheme,
  ScrollTopClass,
  ScrollTopProperties,
} from './scroll-top.theme';
import { mergeTheme } from '../../utils/theme/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SCROLL_TOP_THEME_TOKEN =
  new InjectionToken<ScrollTopBaseTheme>('FLOWBITE_SCROLL_TOP_THEME_TOKEN');

export class ScrollTopThemeService
  implements FlowbiteThemeService<ScrollTopProperties>
{
  private readonly baseTheme = inject(FLOWBITE_SCROLL_TOP_THEME_TOKEN);

  public getClasses(properties: ScrollTopProperties): ScrollTopClass {
    const theme: ScrollTopBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: ScrollTopClass = {
      rootClass: twMerge(
        theme.base,
        theme.color?.[properties.color],
        theme.position?.[properties.position],
      ),
    };

    return output;
  }
}
