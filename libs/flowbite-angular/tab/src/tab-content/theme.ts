import type { FlowbiteTabColors } from '../tab/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteTabContentTheme {
  host: FlowbiteTabContentHostTheme;
}

export interface FlowbiteTabContentHostTheme {
  base: string;
  transition: string;
  color: FlowbiteTabColors;
}

export const flowbiteTabContentTheme: FlowbiteTabContentTheme = createTheme({
  host: {
    base: 'p-6 not-data-active:hidden',
    transition: '',
    color: {
      default: {
        light: 'text-gray-900',
        dark: 'dark:text-gray-100',
      },
      info: {
        light: 'text-gray-900',
        dark: 'dark:text-gray-100',
      },
      failure: {
        light: 'text-gray-900',
        dark: 'dark:text-gray-100',
      },
      success: {
        light: 'text-gray-900',
        dark: 'dark:text-gray-100',
      },
      warning: {
        light: 'text-gray-900',
        dark: 'dark:text-gray-100',
      },
      primary: {
        light: 'text-gray-900',
        dark: 'dark:text-gray-100',
      },
    },
  },
});
