import type { ColorToTheme, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FLowbiteDropdownColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteDropdownTheme {
  host: FlowbiteDropdownHostTheme;
}

export interface FlowbiteDropdownHostTheme {
  base: string;
  transition: string;
  color: FLowbiteDropdownColors;
}

export const flowbiteDropdownTheme: FlowbiteDropdownTheme = createTheme({
  host: {
    base: 'fixed z-10 w-max divide-y rounded-lg border shadow-sm',
    transition: '',
    color: {
      default: {
        light: 'divide-gray-200 border-gray-200 bg-white',
        dark: 'dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800',
      },
      info: {
        light: 'divide-blue-200 border-blue-200 bg-white',
        dark: 'dark:divide-blue-700 dark:border-blue-700 dark:bg-gray-800',
      },
      failure: {
        light: 'divide-red-200 border-red-200 bg-white',
        dark: 'dark:divide-red-700 dark:border-red-700 dark:bg-gray-800',
      },
      success: {
        light: 'divide-green-200 border-green-200 bg-white',
        dark: 'dark:divide-green-700 dark:border-green-700 dark:bg-gray-800',
      },
      warning: {
        light: 'divide-yellow-200 border-yellow-200 bg-white',
        dark: 'dark:divide-yellow-700 dark:border-yellow-700 dark:bg-gray-800',
      },
      primary: {
        light: 'divide-primary-200 border-primary-200 bg-white',
        dark: 'dark:divide-primary-700 dark:border-primary-700 dark:bg-gray-800',
      },
    },
  },
});
