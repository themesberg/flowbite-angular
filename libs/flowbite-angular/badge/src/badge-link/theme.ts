import type { FlowbiteBadgeColors } from '../badge/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteBadgeLinkTheme {
  host: FlowbiteBadgeLinkHostTheme;
}

export interface FlowbiteBadgeLinkHostTheme {
  base: string;
  color: FlowbiteBadgeColors;
}

export const flowbiteBadgeLinkTheme: FlowbiteBadgeLinkTheme = createTheme({
  host: {
    base: 'data-hover:cursor-pointer',
    color: {
      default: 'data-hover:bg-gray-300 dark:data-hover:bg-gray-500',
      primary: 'data-hover:bg-primary-300 dark:data-hover:bg-primary-400',
      dark: 'data-hover:bg-gray-300 dark:data-hover:bg-gray-500',
      blue: 'data-hover:bg-blue-300 dark:data-hover:bg-blue-400',
      red: 'data-hover:bg-red-300 dark:data-hover:bg-red-400',
      green: 'data-hover:bg-green-300 dark:data-hover:bg-green-400',
      yellow: 'data-hover:bg-yellow-300 dark:data-hover:bg-yellow-400',
      indigo: 'data-hover:bg-indigo-300 dark:data-hover:bg-indigo-400',
      purple: 'data-hover:bg-purple-300 dark:data-hover:bg-purple-400',
      pink: 'data-hover:bg-pink-300 dark:data-hover:bg-pink-400',
    },
  },
});
