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
        dark: 'dark:data-hover:bg-gray-500',
      },
      primary: {
        light: 'data-hover:bg-primary-300',
        dark: 'dark:data-hover:bg-primary-400',
      },
      dark: {
        light: 'data-hover:bg-gray-300',
        dark: 'dark:data-hover:bg-gray-500',
      },
      blue: {
        light: 'data-hover:bg-blue-300',
        dark: 'dark:data-hover:bg-blue-400',
      },
      red: {
        light: 'data-hover:bg-red-300',
        dark: 'dark:data-hover:bg-red-400',
      },
      green: {
        light: 'data-hover:bg-green-300',
        dark: 'dark:data-hover:bg-green-400',
      },
      yellow: {
        light: 'data-hover:bg-yellow-300',
        dark: 'dark:data-hover:bg-yellow-400',
      },
      indigo: {
        light: 'data-hover:bg-indigo-300',
        dark: 'dark:data-hover:bg-indigo-400',
      },
      purple: {
        light: 'data-hover:bg-purple-300',
        dark: 'dark:data-hover:bg-purple-400',
      },
      pink: {
        light: 'data-hover:bg-pink-300',
        dark: 'dark:data-hover:bg-pink-400',
      },
    },
  },
});
