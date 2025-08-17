import type { FlowbiteTableColors } from '../table/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteTableHeadTheme {
  host: FlowbiteTableHeadHostTheme;
}

export interface FlowbiteTableHeadHostTheme {
  base: string;
  color: FlowbiteTableColors;
}

export const flowbiteTableHeadTheme: FlowbiteTableHeadTheme = createTheme({
  host: {
    base: 'text-xs uppercase',
    color: {
      default: {
        light: 'bg-gray-50 text-gray-700',
        dark: 'dark:bg-gray-700 dark:text-gray-400',
      },
      info: {
        light: 'bg-blue-50 text-blue-700',
        dark: 'dark:bg-blue-700 dark:text-blue-400',
      },
      failure: {
        light: 'bg-red-50 text-red-700',
        dark: 'dark:bg-red-700 dark:text-red-300',
      },
      success: {
        light: 'bg-green-50 text-green-700',
        dark: 'dark:bg-green-700 dark:text-green-400',
      },
      warning: {
        light: 'bg-yellow-50 text-yellow-700',
        dark: 'dark:bg-yellow-700 dark:text-yellow-400',
      },
      primary: {
        light: 'bg-primary-50 text-primary-700',
        dark: 'dark:bg-primary-700 dark:text-primary-300',
      },
    },
  },
});
