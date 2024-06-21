import { FlowbiteThemeService } from '../../../common';
import {
  LabelDirectiveBaseTheme,
  LabelDirectiveClass,
  LabelDirectiveProperties,
} from './label.directive.theme';
import { mergeTheme } from '../../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_DIRECTIVE_LABEL_THEME_TOKEN =
  new InjectionToken<LabelDirectiveBaseTheme>(
    'FLOWBITE_DIRECTIVE_LABEL_THEME_TOKEN',
  );

export class LabelDirectiveThemeService
  implements FlowbiteThemeService<LabelDirectiveProperties>
{
  private readonly baseTheme = inject(FLOWBITE_DIRECTIVE_LABEL_THEME_TOKEN);

  public getClasses(properties: LabelDirectiveProperties): LabelDirectiveClass {
    const theme: LabelDirectiveBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: LabelDirectiveClass = {
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
          theme.floatingLabel[properties.floatingLabelType].default,

        !properties.floatingLabelType && theme.default.base,
        !properties.floatingLabelType &&
          properties.validate &&
          theme.default.validation[properties.validate],
        !properties.floatingLabelType &&
          !properties.validate &&
          theme.default.default,
      ),
    };

    return output;
  }
}
