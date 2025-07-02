import type { FLowbiteDropdownColors } from '../dropdown/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteDropdownItemTheme {
  host: FlowbiteDropdownItemHostTheme;
}

export interface FlowbiteDropdownItemHostTheme {
  base: string;
  transition: string;
  color: FLowbiteDropdownColors;
}

export const flowbiteDropdownItemTheme: FlowbiteDropdownItemTheme = createTheme({
  host: {
    base: 'flex cursor-pointer items-center justify-between px-4 py-2 font-medium',
    transition: '',
    color: {
      default: {
        light: 'data-hover:bg-gray-100',
        dark: 'dark:data-hover:bg-gray-700 dark:data-hover:text-white',
      },
      info: {
        light: 'data-hover:bg-blue-100',
        dark: 'dark:data-hover:bg-blue-700 dark:data-hover:text-white',
      },
      failure: {
        light: 'data-hover:bg-red-100',
        dark: 'dark:data-hover:bg-red-700 dark:data-hover:text-white',
      },
      success: {
        light: 'data-hover:bg-green-100',
        dark: 'dark:data-hover:bg-green-700 dark:data-hover:text-white',
      },
      warning: {
        light: 'data-hover:bg-yellow-100',
        dark: 'dark:data-hover:bg-yellow-700 dark:data-hover:text-white',
      },
      primary: {
        light: 'data-hover:bg-primary-100',
        dark: 'dark:data-hover:bg-primary-700 dark:data-hover:text-white',
      },
    },
  },
});
