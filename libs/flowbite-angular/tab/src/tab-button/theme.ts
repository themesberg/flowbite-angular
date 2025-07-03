import type { FlowbiteTabColors } from '../tab/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteTabButtonTheme {
  host: FlowbiteTabButtonHostTheme;
}

export interface FlowbiteTabButtonHostTheme {
  base: string;
  transition: string;
  color: FlowbiteTabColors;
}

export const flowbiteTabButtonTheme: FlowbiteTabButtonTheme = createTheme({
  host: {
    base: 'inline-block p-4 data-disabled:cursor-not-allowed data-hover:cursor-pointer',
    transition: '',
    color: {
      default: {
        light:
          'text-gray-500 data-active:font-semibold data-active:text-gray-900 data-disabled:text-gray-300 data-hover:text-gray-900',
        dark: 'dark:text-gray-500 dark:data-active:text-gray-100 dark:data-disabled:text-gray-700 dark:data-hover:text-gray-100',
      },
      info: {
        light:
          'text-gray-500 data-active:font-semibold data-active:text-blue-900 data-disabled:text-gray-300 data-hover:text-blue-900',
        dark: 'dark:text-gray-500 dark:data-active:text-blue-100 dark:data-disabled:text-gray-700 dark:data-hover:text-blue-100',
      },
      failure: {
        light:
          'text-gray-500 data-active:font-semibold data-active:text-red-900 data-disabled:text-gray-300 data-hover:text-red-900',
        dark: 'dark:text-gray-500 dark:data-active:text-red-100 dark:data-disabled:text-gray-700 dark:data-hover:text-red-100',
      },
      success: {
        light:
          'text-gray-500 data-active:font-semibold data-active:text-green-900 data-disabled:text-gray-300 data-hover:text-green-900',
        dark: 'dark:text-gray-500 dark:data-active:text-green-100 dark:data-disabled:text-gray-700 dark:data-hover:text-green-100',
      },
      warning: {
        light:
          'text-gray-500 data-active:font-semibold data-active:text-yellow-900 data-disabled:text-gray-300 data-hover:text-yellow-900',
        dark: 'dark:text-gray-500 dark:data-active:text-yellow-100 dark:data-disabled:text-gray-700 dark:data-hover:text-yellow-100',
      },
      primary: {
        light:
          'data-active:text-primary-900 data-hover:text-primary-900 text-gray-500 data-active:font-semibold data-disabled:text-gray-300',
        dark: 'dark:data-active:text-primary-100 dark:data-hover:text-primary-100 dark:text-gray-500 dark:data-disabled:text-gray-700',
      },
    },
  },
});
