import type { FlowbiteFormFieldColors } from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteHelperTheme {
  host: FlowbiteHelperHostTheme;
}

export interface FlowbiteHelperHostTheme {
  base: string;
  color: FlowbiteFormFieldColors;
}

export const flowbiteHelperTheme: FlowbiteHelperTheme = createTheme({
  host: {
    base: 'mt-2 text-sm',
    color: {
      blue: 'text-blue-900 dark:text-blue-600',
      cyan: 'text-cyan-900 dark:text-cyan-600',
      dark: 'text-gray-900 dark:text-gray-600',
      default: 'text-gray-900 dark:text-white',
      failure: 'text-red-900 dark:text-red-600',
      gray: 'text-gray-900 dark:text-gray-600',
      green: 'text-green-900 dark:text-green-600',
      indigo: 'text-indigo-900 dark:text-indigo-600',
      info: 'text-blue-900 dark:text-blue-600',
      light: 'text-gray-900 dark:text-gray-600',
      lime: 'text-lime-900 dark:text-lime-600',
      pink: 'text-pink-900 dark:text-pink-600',
      primary: 'text-primary-900 dark:text-primary-600',
      purple: 'text-purple-900 dark:text-purple-600',
      red: 'text-red-900 dark:text-red-600',
      success: 'text-green-900 dark:text-green-600',
      teal: 'text-teal-900 dark:text-teal-600',
      warning: 'text-yellow-900 dark:text-yellow-600',
      yellow: 'text-yellow-900 dark:text-yellow-600',
    },
  },
});
