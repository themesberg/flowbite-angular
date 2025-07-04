import type { FlowbiteBadgeColors } from '../badge/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteBadgeButtonTheme {
  host: FlowbiteBadgeButtonHostTheme;
}

export interface FlowbiteBadgeButtonHostTheme {
  base: string;
  color: FlowbiteBadgeColors;
}

export const flowbiteBadgeButtonTheme: FlowbiteBadgeButtonTheme = createTheme({
  host: {
    base: 'flex rounded-lg p-1 first:mr-2 last:ml-2 data-hover:cursor-pointer',
    color: {
      default: {
        light: 'data-hover:bg-gray-300',
        dark: 'dark:data-hover:bg-gray-700',
      },
      info: {
        light: 'data-hover:bg-blue-300',
        dark: 'dark:data-hover:bg-blue-400',
      },
      failure: {
        light: 'data-hover:bg-red-300',
        dark: 'dark:data-hover:bg-red-400',
      },
      success: {
        light: 'data-hover:bg-green-300',
        dark: 'dark:data-hover:bg-green-400',
      },
      warning: {
        light: 'data-hover:bg-yellow-300',
        dark: 'dark:data-hover:bg-yellow-400',
      },
      primary: {
        light: 'data-hover:bg-primary-300',
        dark: 'dark:data-hover:bg-primary-400',
      },
    },
  },
});
