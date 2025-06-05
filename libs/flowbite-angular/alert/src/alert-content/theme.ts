import type { FlowbiteAlertColors } from '../alert/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteAlertContentTheme {
  host: FlowbiteAlertContentHostTheme;
}

export interface FlowbiteAlertContentHostTheme {
  base: string;
  color: FlowbiteAlertColors;
}

export const flowbiteAlertContentTheme: FlowbiteAlertContentTheme = createTheme({
  host: {
    base: 'flex items-center justify-between text-sm font-normal',
    color: {
      danger: {
        light: 'text-red-800',
        dark: 'dark:text-red-300',
      },
      default: {
        light: 'text-gray-800',
        dark: 'dark:text-gray-300',
      },
      primary: {
        light: 'text-primary-800',
        dark: 'dark:text-primary-300',
      },
      success: {
        light: 'text-green-800',
        dark: 'dark:text-green-300',
      },
      warning: {
        light: 'text-yellow-800',
        dark: 'dark:text-yellow-300',
      },
    },
  },
});
