import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { ScrollTopClass, ScrollTopProperties, ScrollTopTheme } from './scroll-top.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SCROLL_TOP_THEME_TOKEN = new InjectionToken<ScrollTopTheme>('FLOWBITE_SCROLL_TOP_THEME_TOKEN');

export class ScrollTopThemeService implements FlowbiteThemeService<ScrollTopProperties> {
  private readonly baseTheme = inject(FLOWBITE_SCROLL_TOP_THEME_TOKEN);

  public getClasses(properties: ScrollTopProperties): ScrollTopClass {
    const theme: ScrollTopTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ScrollTopClass = {
      rootClass: twMerge(theme.root.base, theme.root.color[properties.color], theme.root.position[properties.position]),
    };

    return output;
  }
}
