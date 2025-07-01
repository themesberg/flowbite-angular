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
        light: 'border-gray-300 bg-gray-50 text-gray-900',
        dark: 'dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
      },
      info: {
        light: 'border-blue-300 bg-blue-50 text-blue-900',
        dark: 'dark:border-blue-600 dark:bg-blue-900 dark:text-blue-500 dark:placeholder-blue-400',
      },
      failure: {
        light: 'border-red-300 bg-red-50 text-red-900',
        dark: 'dark:border-red-600 dark:bg-red-900 dark:text-red-500 dark:placeholder-red-400',
      },
      success: {
        light: 'border-green-300 bg-green-50 text-green-900',
        dark: 'dark:border-green-600 dark:bg-green-900 dark:text-green-500 dark:placeholder-green-400',
      },
      warning: {
        light: 'border-yellow-300 bg-yellow-50 text-yellow-900',
        dark: 'dark:border-yellow-600 dark:bg-yellow-900 dark:text-yellow-500 dark:placeholder-yellow-400',
      },
      primary: {
        light: 'border-primary-300 bg-primary-50 text-primary-900',
        dark: 'dark:border-primary-600 dark:bg-primary-900 dark:text-primary-500 dark:placeholder-primary-400',
      },
    },
    mode: {
      normal: 'rounded-lg border',
      floating: 'peer appearance-none border-b-2 bg-transparent px-0 dark:bg-transparent',
    },
  },
});
