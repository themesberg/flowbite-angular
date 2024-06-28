import type { DeepPartial } from '../../../common';
import type { FlowbiteBoolean, FlowbiteClass } from '../../../common/flowbite.theme';
import { createTheme } from '../../../utils/theme/create-theme';
import type { FormFieldFloatingLabelTypes, FormFieldValidations } from '../form-field.theme';

export interface LabelDirectiveProperties {
  disabled: keyof FlowbiteBoolean;
  validate?: keyof FormFieldValidations;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  customStyle: DeepPartial<LabelDirectiveBaseTheme>;
}

export interface LabelDirectiveBaseTheme {
  base: string;
  default: string;
  disabled?: FlowbiteBoolean;
  validation: FormFieldValidations;
  floatingLabel: Record<keyof FormFieldFloatingLabelTypes, Omit<LabelDirectiveBaseTheme, 'floatingLabel'>>;
}

export const labelDirectiveTheme: LabelDirectiveBaseTheme = createTheme({
  base: 'block mb-2 text-sm font-medium',
  default: 'text-gray-900 dark:text-white',
  validation: {
    success: 'text-green-700 dark:text-green-500',
    error: 'text-red-700 dark:text-red-500',
  },
  floatingLabel: {
    standard: {
      base: 'absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
      default: 'text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
      disabled: {
        enabled: 'text-gray-400 dark:text-gray-500 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
        disabled: '',
      },
      validation: {
        success: 'text-green-600 dark:text-green-500',
        error: 'text-red-600 dark:text-red-500',
      },
    },
    outline: {
      base: 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
      default:
        'text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
      disabled: {
        enabled:
          'text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
        disabled: '',
      },
      validation: {
        success: 'text-green-600 dark:text-green-500 bg-white dark:bg-gray-900',
        error: 'text-red-600 dark:text-red-500 bg-white dark:bg-gray-900',
      },
    },
    fill: {
      base: 'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
      default: 'text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
      disabled: {
        enabled: 'text-gray-400 dark:text-gray-500 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
        disabled: '',
      },
      validation: {
        success: 'text-green-600 dark:text-green-500',
        error: 'text-red-600 dark:text-red-500',
      },
    },
  },
});

export type LabelDirectiveClass = FlowbiteClass;

export const labelDirectiveClassInstance: LabelDirectiveClass = {
  rootClass: '',
};
