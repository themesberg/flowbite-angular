import { FlowbiteBoolean } from '../../../common/flowbite.theme';
import {
  FormFieldFloatingLabelTypes,
  FormFieldValidations,
} from '../form-field.theme';
import { mergeTheme } from '../../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface LabelDirectiveProperties {
  disabled: keyof FlowbiteBoolean;
  validate?: keyof FormFieldValidations;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  customStyle: Partial<LabelDirectiveBaseTheme>;
}

export interface LabelDirectiveBaseTheme {
  default: LabelDirectiveRootTheme;
  floatingLabel: Record<
    keyof FormFieldFloatingLabelTypes,
    LabelDirectiveRootTheme
  >;
}

export interface LabelDirectiveRootTheme {
  base: string;
  default: string;
  disabled?: Record<keyof FlowbiteBoolean, string>;
  validation: Record<keyof FormFieldValidations, string>;
}

export const labelDirectiveTheme: LabelDirectiveBaseTheme = {
  default: {
    base: 'block mb-2 text-sm font-medium',
    default: 'text-gray-900 dark:text-white',
    validation: {
      success: 'text-green-700 dark:text-green-500',
      error: 'text-red-700 dark:text-red-500',
    },
  },
  floatingLabel: {
    standard: {
      base: 'absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
      default:
        'text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
      disabled: {
        enabled:
          'text-gray-400 dark:text-gray-500 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
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
      default:
        'text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
      disabled: {
        enabled:
          'text-gray-400 dark:text-gray-500 peer-focus:text-blue-600 peer-focus:dark:text-blue-500',
        disabled: '',
      },
      validation: {
        success: 'text-green-600 dark:text-green-500',
        error: 'text-red-600 dark:text-red-500',
      },
    },
  },
};

export interface LabelDirectiveClass {
  root: string;
}

export function getClasses(
  properties: LabelDirectiveProperties,
): LabelDirectiveClass {
  const theme: LabelDirectiveBaseTheme = mergeTheme(
    labelDirectiveTheme,
    properties.customStyle,
  );

  const output: LabelDirectiveClass = {
    root: twMerge(
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
