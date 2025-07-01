import type { FlowbiteBadgeColors } from '../badge/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteBadgeLinkTheme {
  host: FlowbiteBadgeLinkHostTheme;
}

export interface FlowbiteBadgeLinkHostTheme {
  base: string;
  transition: string;
  color: FlowbiteBadgeColors;
}

export const flowbiteBadgeLinkTheme: FlowbiteBadgeLinkTheme = createTheme({
  host: {
    base: 'data-hover:cursor-pointer',
    transition: '',
    color: {
      default: {
        light: 'data-hover:bg-gray-200',
        dark: 'dark:data-hover:bg-gray-700',
      },
      info: {
        light: 'data-hover:bg-blue-200',
        dark: 'dark:data-hover:bg-blue-900',
      },
      failure: {
        light: 'data-hover:bg-red-200',
        dark: 'dark:data-hover:bg-red-900',
      },
      success: {
        light: 'data-hover:bg-green-200',
        dark: 'dark:data-hover:bg-green-900',
      },
      warning: {
        light: 'data-hover:bg-yellow-200',
        dark: 'dark:data-hover:bg-yellow-900',
      },
      primary: {
        light: 'data-hover:bg-primary-200',
        dark: 'dark:data-hover:bg-primary-900',
      },
    },
  },
});
