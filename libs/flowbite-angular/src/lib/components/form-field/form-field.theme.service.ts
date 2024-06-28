import { FlowbiteThemeService } from '../../common';
import {
  FormFieldBaseTheme,
  FormFieldClass,
  FormFieldProperties,
} from './form-field.theme';
import { mergeTheme } from '../../utils/theme/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_FORM_FIELD_THEME_TOKEN =
  new InjectionToken<FormFieldBaseTheme>('FLOWBITE_FORM_FIELD_THEME_TOKEN');

export class FormFieldThemeService
  implements FlowbiteThemeService<FormFieldProperties>
{
  private readonly baseTheme = inject(FLOWBITE_FORM_FIELD_THEME_TOKEN);

  public getClasses(properties: FormFieldProperties): FormFieldClass {
    const theme: FormFieldBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: FormFieldClass = {
      rootClass: twMerge(theme.base),
    };

    return output;
  }
}
