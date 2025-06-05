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
      danger: {
        light: 'data-hover:bg-red-300',
        dark: 'dark:data-hover:bg-gray-600',
      },
      default: {
        light: 'data-hover:bg-gray-300',
        dark: 'dark:data-hover:bg-gray-600',
      },
      primary: {
        light: 'data-hover:bg-primary-300',
        dark: 'dark:data-hover:bg-gray-600',
      },
      success: {
        light: 'data-hover:bg-green-300',
        dark: 'dark:data-hover:bg-gray-600',
      },
      warning: {
        light: 'data-hover:bg-yellow-300',
        dark: 'dark:data-hover:bg-gray-600',
      },
    },
  },
});
