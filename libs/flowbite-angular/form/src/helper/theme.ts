import type { FlowbiteInputFieldColors } from '../input-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteHelperTheme {
  host: FlowbiteHelperHostTheme;
}

export interface FlowbiteHelperHostTheme {
  base: string;
  color: FlowbiteInputFieldColors;
}

export const flowbiteHelperTheme: FlowbiteHelperTheme = createTheme({
  host: {
    base: 'mt-2 text-sm',
    color: {
      info: 'text-blue-500 dark:text-blue-500',
      failure: 'text-red-500 dark:text-red-500',
      success: 'text-green-500 dark:text-green-500',
      warning: 'text-yellow-500 dark:text-yellow-500',
      primary: 'text-primary-500 dark:text-primary-500',
      dark: 'text-gray-500 dark:text-gray-500',
      light: 'text-gray-500 dark:text-gray-500',
      blue: 'text-blue-500 dark:text-blue-500',
      cyan: 'text-cyan-500 dark:text-cyan-500',
      gray: 'text-gray-500 dark:text-gray-500',
      green: 'text-green-500 dark:text-green-500',
      indigo: 'text-indigo-500 dark:text-indigo-500',
      lime: 'text-lime-500 dark:text-lime-500',
      pink: 'text-pink-500 dark:text-pink-500',
      purple: 'text-purple-500 dark:text-purple-500',
      red: 'text-red-500 dark:text-red-500',
      teal: 'text-teal-500 dark:text-teal-500',
      yellow: 'text-yellow-500 dark:text-yellow-500',
    },
  },
});
