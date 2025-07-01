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
        light: '',
        dark: '',
      },
      failure: {
        light: '',
        dark: '',
      },
      success: {
        light: '',
        dark: '',
      },
      warning: {
        light: '',
        dark: '',
      },
      primary: {
        light: '',
        dark: '',
      },
    },
  },
});
