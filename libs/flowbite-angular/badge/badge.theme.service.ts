import type { BadgeClass, BadgeProperties, BadgeTheme } from './badge.theme';

import type { FlowbiteThemeService } from 'flowbite-angular';
import { mergeTheme } from 'flowbite-angular/utils';

import { inject, Injectable, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

/**
 * `InjectionToken` used to import `BadgeTheme` value
 *
 * @example
 * ```
 * var theme = inject(FLOWBITE_BADGE_THEME_TOKEN)
 * ```
 */
export const FLOWBITE_BADGE_THEME_TOKEN = new InjectionToken<BadgeTheme>(
  'FLOWBITE_BADGE_THEME_TOKEN'
);

@Injectable({
  providedIn: 'root',
})
export class BadgeThemeService implements FlowbiteThemeService<BadgeProperties> {
  private readonly baseTheme = inject(FLOWBITE_BADGE_THEME_TOKEN);

  public getClasses(properties: BadgeProperties): BadgeClass {
    const theme: BadgeTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: BadgeClass = {
      rootClass: twMerge(
        theme.root.base,
        theme.root.color[properties.color],
        theme.root.hasBorder[properties.hasBorder],
        theme.root.size[properties.size],
        theme.root.isPill[
          properties.isPill == 'enabled' || properties.isIconOnly == 'enabled'
            ? 'enabled'
            : properties.isPill
        ],
        theme.root.isIconOnly[properties.isIconOnly],
        theme.root.link[properties.link ? 'enabled' : 'disabled']
      ),
    };

    return output;
  }
}
