import type { FLowbiteDropdownColors } from '../dropdown/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteDropdownContentTheme {
  host: FlowbiteDropdownContentHostTheme;
}

export interface FlowbiteDropdownContentHostTheme {
  base: string;
  transition: string;
  color: FLowbiteDropdownColors;
}

export const flowbiteDropdownContentTheme: FlowbiteDropdownContentTheme = createTheme({
  host: {
    base: 'py-2 text-sm',
    transition: '',
    color: {
      default: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-200',
      },
      info: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-200',
      },
      failure: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-200',
      },
      success: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-200',
      },
      warning: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-200',
      },
      primary: {
        light: 'text-gray-700',
        dark: 'dark:text-gray-200',
      },
    },
  },
});
