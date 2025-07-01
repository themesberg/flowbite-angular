import type { FlowbiteAlertColors } from '../alert/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteAlertContentTheme {
  host: FlowbiteAlertContentHostTheme;
}

export interface FlowbiteAlertContentHostTheme {
  base: string;
  transition: string;
  color: FlowbiteAlertColors;
}

export const flowbiteAlertContentTheme: FlowbiteAlertContentTheme = createTheme({
  host: {
    base: 'flex items-center justify-between text-sm font-normal',
    transition: '',
    color: {
      default: {
        light: 'text-gray-800',
        dark: 'dark:text-gray-300',
      },
      info: {
        light: 'text-blue-800',
        dark: 'dark:text-blue-300',
      },
      failure: {
        light: 'text-red-800',
        dark: 'dark:text-red-300',
      },
      success: {
        light: 'text-green-800',
        dark: 'dark:text-green-300',
      },
      warning: {
        light: 'text-yellow-800',
        dark: 'dark:text-yellow-300',
      },
      primary: {
        light: 'text-primary-800',
        dark: 'dark:text-primary-300',
      },
    },
  },
});
