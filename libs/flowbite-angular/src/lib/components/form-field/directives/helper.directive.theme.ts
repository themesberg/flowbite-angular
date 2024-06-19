import { FlowbiteClass } from '../../../common';
import { FormFieldValidations } from '../form-field.theme';

export type HelperDirectiveProperties = {
  validate?: keyof FormFieldValidations;
  customStyle: Partial<HelperDirectiveBaseTheme>;
};

export type HelperDirectiveBaseTheme = {
  root: Partial<HelperDirectiveRootTheme>;
};

export type HelperDirectiveRootTheme = {
  base: string;
  validation: Record<keyof FormFieldValidations, string>;
};

export const helperDirectiveTheme: HelperDirectiveBaseTheme = {
  root: {
    base: 'mt-2 text-xs text-gray-500 dark:text-gray-400',
    validation: {
      success: 'text-green-600 dark:text-green-400',
      error: 'text-red-600 dark:text-red-400',
    },
  },
};

export type HelperDirectiveClass = FlowbiteClass;

export const helperDirectiveClassInstance: HelperDirectiveClass = {
  rootClass: '',
};
