import type { FlowbiteAlertColors } from '../alert/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteAlertButtonTheme {
  host: FlowbiteAlertButtonHostTheme;
}

export interface FlowbiteAlertButtonHostTheme {
  base: string;
  transition: string;
  color: FlowbiteAlertColors;
}

export const flowbiteAlertButtonTheme: FlowbiteAlertButtonTheme = createTheme({
  host: {
    base: 'flex rounded-lg p-1 first:mr-2 data-hover:cursor-pointer',
    transition: '',
    color: {
      default: {
        light: 'data-hover:bg-gray-300',
        dark: 'dark:data-hover:bg-gray-600',
      },
      info: {
        light: 'data-hover:bg-blue-300',
        dark: 'dark:data-hover:bg-blue-700',
      },
      failure: {
        light: 'data-hover:bg-red-300',
        dark: 'dark:data-hover:bg-red-700',
      },
      success: {
        light: 'data-hover:bg-green-300',
        dark: 'dark:data-hover:bg-green-600',
      },
      warning: {
        light: 'data-hover:bg-yellow-300',
        dark: 'dark:data-hover:bg-yellow-600',
      },
      primary: {
        light: 'data-hover:bg-primary-300',
        dark: 'dark:data-hover:bg-primary-700',
      },
    },
  },
});
