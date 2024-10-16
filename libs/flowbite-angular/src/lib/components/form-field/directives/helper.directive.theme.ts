import type { DeepPartial, FlowbiteClass } from '../../../common';
import { createTheme } from '../../../utils/theme/create-theme';
import type { FormFieldValidations } from '../form-field.theme';

export interface HelperDirectiveProperties {
  validate?: keyof FormFieldValidations;
  customStyle: DeepPartial<HelperDirectiveBaseTheme>;
}

export interface HelperDirectiveBaseTheme {
  base: string;
  validation: FormFieldValidations;
}

export const helperDirectiveTheme: HelperDirectiveBaseTheme = createTheme({
  base: 'mt-2 text-xs text-gray-500 dark:text-gray-400',
  validation: {
    success: 'text-green-600 dark:text-green-400',
    error: 'text-red-600 dark:text-red-400',
  },
});

export type HelperDirectiveClass = FlowbiteClass;

export const helperDirectiveClassInstance: HelperDirectiveClass = {
  rootClass: '',
};
