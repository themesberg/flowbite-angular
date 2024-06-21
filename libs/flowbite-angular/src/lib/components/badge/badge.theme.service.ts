import { BadgeBaseTheme, BadgeClass, BadgeProperties } from './badge.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_BADGE_THEME_TOKEN = new InjectionToken<BadgeBaseTheme>(
  'FLOWBITE_BADGE_THEME_TOKEN',
);

export class BadgeThemeService
  implements FlowbiteThemeService<BadgeProperties>
{
  private readonly baseTheme = inject(FLOWBITE_BADGE_THEME_TOKEN);

  public getClasses(properties: BadgeProperties): BadgeClass {
    const theme: BadgeBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: BadgeClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color?.[properties.color],
        theme.root.size?.[properties.size],
        theme.root.isPill?.[
          properties.isPill == 'enabled' || properties.isIconOnly == 'enabled'
            ? 'enabled'
            : properties.isPill
        ],
        theme.root.isIconOnly?.[properties.isIconOnly],
        theme.root.link?.[properties.link ? 'enabled' : 'disabled'],
      ),
    };

    return output;
  }
}
