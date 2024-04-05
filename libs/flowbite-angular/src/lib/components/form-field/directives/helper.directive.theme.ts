import { FormFieldValidations } from '../form-field.theme';
import { mergeTheme } from '../../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface HelperDirectiveProperties {
  validate?: keyof FormFieldValidations;
  customStyle: Partial<HelperDirectiveBaseTheme>;
}

export interface HelperDirectiveBaseTheme {
  root: Partial<HelperDirectiveRootTheme>;
}

export interface HelperDirectiveRootTheme {
  base: string;
  validation: Record<keyof FormFieldValidations, string>;
}

export const helperDirectiveTheme: HelperDirectiveBaseTheme = {
  root: {
    base: 'mt-2 text-xs text-gray-500 dark:text-gray-400',
    validation: {
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
    },
  },
};

export interface HelperDirectiveClass {
  root: string;
}

export function getClasses(
  properties: HelperDirectiveProperties,
): HelperDirectiveClass {
  const theme: HelperDirectiveBaseTheme = mergeTheme(
    helperDirectiveTheme,
    properties.customStyle,
  );

  const output: HelperDirectiveClass = {
    root: twMerge(
      theme.root.base,
      theme.root.validation && theme.root.validation![properties.validate!],
    ),
  };

  return output;
}
