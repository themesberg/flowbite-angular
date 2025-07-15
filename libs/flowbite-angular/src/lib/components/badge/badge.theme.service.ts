import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { BadgeClass, BadgeProperties, BadgeTheme } from './badge.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BADGE_THEME_TOKEN = new InjectionToken<BadgeTheme>('FLOWBITE_BADGE_THEME_TOKEN');

export class BadgeThemeService implements FlowbiteThemeService<BadgeProperties> {
  private readonly baseTheme = inject(FLOWBITE_BADGE_THEME_TOKEN);

  public getClasses(properties: BadgeProperties): BadgeClass {
    const theme: BadgeTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: BadgeClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color[properties.color],
        theme.root.size[properties.size],
        theme.root.isPill[
          properties.isPill == 'enabled' || properties.isIconOnly == 'enabled' ? 'enabled' : properties.isPill
        ],
        theme.root.isIconOnly[properties.isIconOnly],
        theme.root.link[properties.link ? 'enabled' : 'disabled'],
      ),
    };

    return output;
  }
}
