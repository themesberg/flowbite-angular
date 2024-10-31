import type { ScrollTopClass, ScrollTopProperties, ScrollTopTheme } from './scroll-top.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_SCROLL_TOP_THEME_TOKEN = new InjectionToken<ScrollTopTheme>(
  'FLOWBITE_SCROLL_TOP_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class ScrollTopThemeService implements FlowbiteThemeService<ScrollTopProperties> {
  private readonly baseTheme = inject(FLOWBITE_SCROLL_TOP_THEME_TOKEN);

  public getClasses(properties: ScrollTopProperties): ScrollTopClass {
    const theme: ScrollTopTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: ScrollTopClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color[properties.color],
        theme.root.position[properties.position]
      ),
    };

    return output;
  }
}
