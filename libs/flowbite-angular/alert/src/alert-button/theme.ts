import type { FlowbiteAlertColors } from '../alert/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteAlertButtonTheme {
  host: FlowbiteAlertButtonHostTheme;
}

export interface FlowbiteAlertButtonHostTheme {
  base: string;
  color: FlowbiteAlertColors;
}

export const flowbiteAlertButtonTheme: FlowbiteAlertButtonTheme = createTheme({
  host: {
    base: 'flex rounded-lg p-1 first:mr-2 data-hover:cursor-pointer',
    color: {
      default: 'data-hover:bg-gray-300 dark:data-hover:bg-gray-700',
      primary: 'data-hover:bg-primary-200 dark:data-hover:bg-gray-700',
      dark: 'data-hover:bg-gray-200 dark:data-hover:bg-gray-700',
      blue: 'data-hover:bg-blue-200 dark:data-hover:bg-gray-700',
      red: 'data-hover:bg-red-200 dark:data-hover:bg-gray-700',
      green: 'data-hover:bg-green-200 dark:data-hover:bg-gray-700',
      yellow: 'data-hover:bg-yellow-200 dark:data-hover:bg-gray-700',
    },
  },
});
