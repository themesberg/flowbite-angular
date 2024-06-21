import { FlowbiteThemeService } from '../../../common';
import {
  InputDirectiveBaseTheme,
  InputDirectiveClass,
  InputDirectiveProperties,
} from './input.directive.theme';
import { mergeTheme } from '../../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DIRECTIVE_INPUT_THEME_TOKEN =
  new InjectionToken<InputDirectiveBaseTheme>(
    'FLOWBITE_DIRECTIVE_INPUT_THEME_TOKEN',
  );

export class InputDirectiveThemeService
  implements FlowbiteThemeService<InputDirectiveProperties>
{
  private readonly baseTheme = inject(FLOWBITE_DIRECTIVE_INPUT_THEME_TOKEN);

  public getClasses(properties: InputDirectiveProperties): InputDirectiveClass {
    const theme: InputDirectiveBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: InputDirectiveClass = {
      rootClass: twMerge(
        properties.floatingLabelType &&
          theme.floatingLabel[properties.floatingLabelType].base,
        properties.floatingLabelType &&
          properties.validate &&
          theme.floatingLabel[properties.floatingLabelType].validation[
            properties.validate
          ],
        properties.floatingLabelType &&
          !properties.validate &&
          properties.disabled &&
          theme.floatingLabel[properties.floatingLabelType].disabled[
            properties.disabled
          ],
        properties.floatingLabelType &&
          !properties.validate &&
          (!properties.disabled || properties.disabled === 'disabled') &&
          theme.floatingLabel[properties.floatingLabelType].default,
        properties.floatingLabelType &&
          theme.floatingLabel?.[properties.floatingLabelType].size[
            properties.size
          ],

        !properties.floatingLabelType && theme.default.base,
        !properties.floatingLabelType &&
          properties.validate &&
          theme.default.validation[properties.validate],
        !properties.floatingLabelType &&
          !properties.validate &&
          properties.disabled &&
          theme.default.disabled[properties.disabled],
        !properties.floatingLabelType &&
          !properties.validate &&
          (!properties.disabled || properties.disabled === 'disabled') &&
          theme.default.default,
        !properties.floatingLabelType &&
          properties.prefix &&
          theme.default.prefix?.[properties.prefix],
        !properties.floatingLabelType && theme.default.size[properties.size],
      ),
    };

    return output;
  }
}
