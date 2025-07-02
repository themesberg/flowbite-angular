import type {
  FlowbiteFormFieldColors,
  FlowbiteFormFieldModes,
  FlowbiteFormFieldSizes,
} from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteFormControlTheme {
  host: FlowbiteFormControlHostTheme;
}

export interface FlowbiteFormControlHostTheme {
  base: string;
  transition: string;
  disabled: string;
  size: FlowbiteFormFieldSizes;
  color: FlowbiteFormFieldColors;
  mode: FlowbiteFormFieldModes;
}

export const flowbiteFormControlTheme: FlowbiteFormControlTheme = createTheme({
  host: {
    base: 'block w-full text-sm',
    transition: '',
    disabled: 'data-disabled:cursor-not-allowed',
    size: {
      sm: 'p-2',
      md: 'p-2.5',
      xl: 'p-3',
    },
    color: {
      default: {
        light: 'border-gray-300 bg-gray-50 text-gray-900 outline-gray-200',
        dark: 'dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:outline-gray-700',
      },
      info: {
        light: 'border-blue-300 bg-gray-50 text-blue-900 outline-blue-200',
        dark: 'dark:border-blue-600 dark:bg-gray-700 dark:text-blue-500 dark:placeholder-blue-400 dark:outline-blue-700',
      },
      failure: {
        light: 'border-red-300 bg-gray-50 text-red-900 outline-red-200',
        dark: 'dark:border-red-600 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-400 dark:outline-red-700',
      },
      success: {
        light: 'border-green-300 bg-gray-50 text-green-900 outline-green-200',
        dark: 'dark:border-green-600 dark:bg-gray-700 dark:text-green-500 dark:placeholder-green-400 dark:outline-green-700',
      },
      warning: {
        light: 'border-yellow-300 bg-gray-50 text-yellow-900 outline-yellow-200',
        dark: 'dark:border-yellow-600 dark:bg-gray-700 dark:text-yellow-500 dark:placeholder-yellow-400 dark:outline-yellow-700',
      },
      primary: {
        light: 'border-primary-300 text-primary-900 outline-primary-200 bg-gray-50',
        dark: 'dark:border-primary-600 dark:text-primary-500 dark:placeholder-primary-400 dark:outline-primary-700 dark:bg-gray-700',
      },
    },
    mode: {
      normal: 'rounded-lg border data-focus:outline-2',
      floating:
        'peer appearance-none border-b-2 bg-transparent px-0 not-data-focus:border-gray-300 data-focus:outline-0 dark:bg-transparent',
    },
  },
});
