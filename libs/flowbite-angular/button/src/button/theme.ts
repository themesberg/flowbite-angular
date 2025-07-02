import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from '../base-button/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteButtonTheme {
  host: FlowbiteButtonHostTheme;
}

export interface FlowbiteButtonHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteBaseButtonSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteBaseButtonColors;
  colorOutline: FlowbiteBaseButtonColors;
}

export const flowbiteButtonTheme: FlowbiteButtonTheme = createTheme({
  host: {
    base: 'flex cursor-pointer items-center justify-center border text-center font-medium',
    transition: '',
    focus: 'data-focus:ring-2',
    disabled: 'data-disabled:cursor-not-allowed',
    size: {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5 text-base',
    },
    pill: {
      on: 'rounded-full',
      off: 'rounded-lg',
    },
    color: {
      default: {
        light: 'border-gray-200 bg-gray-100 text-gray-700 data-hover:bg-gray-200',
        dark: 'dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:data-hover:bg-gray-700',
      },
      info: {
        light: 'border-blue-700 bg-blue-600 text-gray-100 data-hover:bg-blue-700',
        dark: 'dark:border-blue-900 dark:bg-blue-800 dark:text-blue-100 dark:data-hover:bg-blue-900',
      },
      failure: {
        light: 'border-red-700 bg-red-600 text-gray-100 data-hover:bg-red-700',
        dark: 'dark:border-red-900 dark:bg-red-800 dark:text-red-100 dark:data-hover:bg-red-900',
      },
      success: {
        light: 'border-green-700 bg-green-600 text-gray-100 data-hover:bg-green-700',
        dark: 'dark:border-green-900 dark:bg-green-800 dark:text-green-100 dark:data-hover:bg-green-900',
      },
      warning: {
        light: 'border-yellow-700 bg-yellow-600 text-gray-100 data-hover:bg-yellow-700',
        dark: 'dark:border-yellow-900 dark:bg-yellow-800 dark:text-yellow-100 dark:data-hover:bg-yellow-900',
      },
      primary: {
        light: 'border-primary-800 bg-primary-700 data-hover:bg-primary-800 text-gray-100',
        dark: 'dark:border-primary-900 dark:bg-primary-800 dark:text-primary-100 dark:data-hover:bg-primary-900',
      },
    },
    colorOutline: {
      default: {
        light: 'border-gray-700 text-gray-700 data-hover:bg-gray-700 data-hover:text-gray-100',
        dark: 'dark:border-gray-300 dark:text-gray-300 dark:data-hover:bg-gray-300 dark:data-hover:text-gray-700',
      },
      info: {
        light: 'border-blue-700 text-blue-700 data-hover:bg-blue-700 data-hover:text-gray-100',
        dark: 'dark:border-blue-700 dark:text-blue-600 dark:data-hover:bg-blue-700 dark:data-hover:text-gray-100',
      },
      failure: {
        light: 'border-red-700 text-red-700 data-hover:bg-red-700 data-hover:text-red-100',
        dark: 'dark:border-red-700 dark:text-red-600 dark:data-hover:bg-red-700 dark:data-hover:text-gray-100',
      },
      success: {
        light: 'border-green-700 text-green-700 data-hover:bg-green-700 data-hover:text-green-100',
        dark: 'dark:border-green-700 dark:text-green-600 dark:data-hover:bg-green-700 dark:data-hover:text-gray-100',
      },
      warning: {
        light:
          'border-yellow-700 text-yellow-700 data-hover:bg-yellow-700 data-hover:text-yellow-100',
        dark: 'dark:border-yellow-700 dark:text-yellow-600 dark:data-hover:bg-yellow-700 dark:data-hover:text-gray-100',
      },
      primary: {
        light:
          'border-primary-700 text-primary-700 data-hover:bg-primary-700 data-hover:text-primary-100',
        dark: 'dark:border-primary-700 dark:text-primary-600 dark:data-hover:bg-primary-700 dark:data-hover:text-gray-100',
      },
    },
  },
});
