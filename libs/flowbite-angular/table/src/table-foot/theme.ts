import type { FlowbiteTableColors } from '../table/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteTableFootTheme {
  host: FlowbiteTableFootHostTheme;
}

export interface FlowbiteTableFootHostTheme {
  base: string;
  color: FlowbiteTableColors;
}

export const flowbiteTableFootTheme: FlowbiteTableFootTheme = createTheme({
  host: {
    base: 'font-semibold',
    color: {
      default: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      info: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      failure: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      success: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      warning: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
      primary: {
        light: 'text-gray-900',
        dark: 'dark:text-white',
      },
    },
  },
});
