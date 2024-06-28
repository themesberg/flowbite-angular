import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { BadgeBaseTheme, BadgeClass, BadgeProperties } from './badge.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BADGE_THEME_TOKEN = new InjectionToken<BadgeBaseTheme>('FLOWBITE_BADGE_THEME_TOKEN');

export class BadgeThemeService implements FlowbiteThemeService<BadgeProperties> {
  private readonly baseTheme = inject(FLOWBITE_BADGE_THEME_TOKEN);

  public getClasses(properties: BadgeProperties): BadgeClass {
    const theme: BadgeBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: BadgeClass = {
      rootClass: twMerge(
        theme.base,
        theme.color[properties.color],
        theme.size[properties.size],
        theme.isPill[
          properties.isPill == 'enabled' || properties.isIconOnly == 'enabled' ? 'enabled' : properties.isPill
        ],
        theme.isIconOnly[properties.isIconOnly],
        theme.link[properties.link ? 'enabled' : 'disabled'],
      ),
    };

    return output;
  }
}
