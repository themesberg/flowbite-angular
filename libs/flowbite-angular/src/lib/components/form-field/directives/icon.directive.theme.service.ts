import type { FlowbiteThemeService } from '../../../services';
import { mergeTheme } from '../../../utils/theme/merge-theme';
import type {
  IconDirectiveBaseTheme,
  IconDirectiveClass,
  IconDirectiveProperties,
} from './icon.directive.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DIRECTIVE_ICON_THEME_TOKEN = new InjectionToken<IconDirectiveBaseTheme>(
  'FLOWBITE_DIRECTIVE_ICON_THEME_TOKEN'
);

export class IconDirectiveThemeService implements FlowbiteThemeService<IconDirectiveProperties> {
  private readonly baseTheme = inject(FLOWBITE_DIRECTIVE_ICON_THEME_TOKEN);

  public getClasses(properties: IconDirectiveProperties): IconDirectiveClass {
    const theme: IconDirectiveBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: IconDirectiveClass = {
      rootClass: twMerge(theme.base),
    };

    return output;
  }
}
