import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type {
  RoutableDirectiveBaseTheme,
  RoutableDirectiveClass,
  RoutableDirectiveProperties,
} from './routable.directive.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DIRECTIVE_ROUTABLE_THEME_TOKEN = new InjectionToken<RoutableDirectiveBaseTheme>(
  'FLOWBITE_DIRECTIVE_ROUTABLE_THEME_TOKEN',
);

export class RoutableDirectiveThemeService implements FlowbiteThemeService<RoutableDirectiveProperties> {
  private readonly baseTheme = inject(FLOWBITE_DIRECTIVE_ROUTABLE_THEME_TOKEN);

  public getClasses(properties: RoutableDirectiveProperties): RoutableDirectiveClass {
    const theme: RoutableDirectiveBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: RoutableDirectiveClass = {
      rootClass: twMerge(theme.base, theme.href[properties.href ? 'enabled' : 'disabled']),
    };

    return output;
  }
}
