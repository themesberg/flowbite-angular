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
          'text-gray-500 data-active:font-semibold data-active:text-gray-900 data-disabled:text-gray-300',
        dark: 'dark:text-gray-500 dark:data-active:text-gray-100 dark:data-disabled:text-gray-700',
      },
      info: {
        light: '',
        dark: '',
      },
      failure: {
        light: '',
        dark: '',
      },
      success: {
        light: '',
        dark: '',
      },
      warning: {
        light: '',
        dark: '',
      },
      primary: {
        light: '',
        dark: '',
      },
    },
  },
});
