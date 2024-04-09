import { FlowbiteBoolean } from '../../../common/flowbite.theme';
import {
  FormFieldFloatingLabelTypes,
  FormFieldPrefixes,
  FormFieldSizes,
  FormFieldValidations,
} from '../form-field.theme';
import { mergeTheme } from '../../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface InputDirectiveProperties {
  size: keyof FormFieldSizes;
  disabled: keyof FlowbiteBoolean;
  validate?: keyof FormFieldValidations;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  prefix?: keyof FormFieldPrefixes;
  customStyle: Partial<InputDirectiveBaseTheme>;
}

export interface InputDirectiveBaseTheme {
  default: InputDirectiveRootTheme;
  floatingLabel: Record<
    keyof FormFieldFloatingLabelTypes,
    InputDirectiveRootTheme
  >;
}

export interface InputDirectiveRootTheme {
  base: string;
  default: string;
  size: Record<keyof FormFieldSizes, string>;
  disabled: Record<keyof FlowbiteBoolean, string>;
  validation: Record<keyof FormFieldValidations, string>;
  prefix?: Record<keyof FormFieldPrefixes, string>;
}

export const inputDirectiveTheme: InputDirectiveBaseTheme = {
  default: {
    base: 'border rounded-lg block w-full focus:outline-none',
    default:
      'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white',
    disabled: {
      enabled:
        'cursor-not-allowed bg-gray-100 border-gray-300 text-gray-900 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:placeholder-gray-400',
      disabled: '',
    },
    prefix: {
      addon: 'rounded-none rounded-r-lg flex-1 min-w-0',
      icon: 'pl-10',
    },
    size: {
      sm: 'text-xs p-2',
      md: 'text-sm p-2.5',
      lg: 'text-md p-4',
    },
    validation: {
      success:
        'bg-green-50 border-green-500 text-green-900 placeholder-green-700 dark:placeholder-green-500 dark:text-green-400 dark:border-green-500 focus:ring-green-500 focus:border-green-500',
      error:
        'bg-red-50 border-red-500 text-red-900 placeholder-red-700 dark:placeholder-red-500 dark:text-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500',
    },
  },
  floatingLabel: {
    standard: {
      base: 'block w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer',
      default:
        'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
      disabled: {
        enabled:
          'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
        disabled: '',
      },
      size: {
        sm: 'py-2 px-0',
        md: 'py-2.5 px-0',
        lg: '',
      },
      validation: {
        success:
          'text-gray-900 border-green-600 dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:border-green-600',
        error:
          'text-gray-900 border-red-600 dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:border-red-600',
      },
    },
    outline: {
      base: 'block w-full text-sm bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer',
      default:
        'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
      disabled: {
        enabled:
          'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
        disabled: '',
      },
      size: {
        sm: 'px-2.5 pb-1.5 pt-3',
        md: 'px-2.5 pb-2.5 pt-4',
        lg: '',
      },
      validation: {
        success:
          'text-gray-900 border-green-600 dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:border-green-600',
        error:
          'text-gray-900 border-red-600 dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:border-red-600',
      },
    },
    fill: {
      base: 'block rounded-t-lg w-full text-sm border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer',
      default:
        'text-gray-900 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
      disabled: {
        enabled:
          'text-gray-900 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
        disabled: '',
      },
      size: {
        sm: 'px-2.5 pb-1.5 pt-4',
        md: 'px-2.5 pb-2.5 pt-5',
        lg: '',
      },
      validation: {
        success:
          'text-gray-900 bg-gray-50 dark:bg-gray-700 border-green-600 dark:border-green-500 dark:text-white dark:focus:border-green-500 focus:border-green-600',
        error:
          'text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-red-500 border-red-600 focus:border-red-600 dark:focus-border-red-500',
      },
    },
  },
};

export interface InputDirectiveClass {
  root: string;
}

export function getClasses(
  properties: InputDirectiveProperties,
): InputDirectiveClass {
  const theme: InputDirectiveBaseTheme = mergeTheme(
    inputDirectiveTheme,
    properties.customStyle,
  );

  const output: InputDirectiveClass = {
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
        properties.disabled &&
        theme.floatingLabel[properties.floatingLabelType].disabled[
          properties.disabled
        ],
      properties.floatingLabelType &&
        !properties.validate &&
        (!properties.disabled || properties.disabled === 'disabled') &&
        theme.floatingLabel[properties.floatingLabelType].default,
      properties.floatingLabelType &&
        theme.floatingLabel[properties.floatingLabelType].size![
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
        theme.default.prefix![properties.prefix!],
      !properties.floatingLabelType && theme.default.size[properties.size],
    ),
  };

  return output;
}
