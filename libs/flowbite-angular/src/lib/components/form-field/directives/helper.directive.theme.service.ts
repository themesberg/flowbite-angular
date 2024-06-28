import { FlowbiteThemeService } from '../../../common';
import {
  HelperDirectiveBaseTheme,
  HelperDirectiveClass,
  HelperDirectiveProperties,
} from './helper.directive.theme';
import { mergeTheme } from '../../../utils/theme/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DIRECTIVE_HELPER_THEME_TOKEN =
  new InjectionToken<HelperDirectiveBaseTheme>(
    'FLOWBITE_DIRECTIVE_HELPER_THEME_TOKEN',
  );

export class HelperDirectiveThemeService
  implements FlowbiteThemeService<HelperDirectiveProperties>
{
  private readonly baseTheme = inject(FLOWBITE_DIRECTIVE_HELPER_THEME_TOKEN);

  public getClasses(
    properties: HelperDirectiveProperties,
  ): HelperDirectiveClass {
    const theme: HelperDirectiveBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: HelperDirectiveClass = {
      rootClass: twMerge(
        theme.base,
        properties.validate && theme.validation?.[properties.validate],
      ),
    };

    return output;
  }
}
