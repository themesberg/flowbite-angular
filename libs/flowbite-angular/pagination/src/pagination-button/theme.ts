import type { FlowbitePaginationColors, FlowbitePaginationSizes } from '../pagination/theme';

import type { ColorToTheme } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbitePaginationButtonSizes extends FlowbitePaginationSizes {
  [key: string]: string;
}

export interface FlowbitePaginationButtonColors extends FlowbitePaginationColors {
  [key: string]: ColorToTheme;
}

export interface FlowbitePaginationButtonTheme {
  host: FlowbitePaginationButtonHostTheme;
}

export interface FlowbitePaginationButtonHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbitePaginationButtonSizes;
  colorOutline: FlowbitePaginationButtonColors;
}

export const flowbitePaginationButtonTheme: FlowbitePaginationButtonTheme = createTheme({
  host: {
    base: 'inline-flex h-full cursor-pointer items-center justify-center border border-transparent text-center font-medium',
    transition: '',
    focus: 'data-focus:outline-none data-focus-visible:outline-2',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {
      xs: 'min-w-8 px-2 py-2 text-xs',
      sm: 'min-w-9 px-2.5 py-2.5 text-sm',
      md: 'text-md min-w-10 px-3 py-2.5',
      lg: 'min-w-11 px-3.5 py-3.5 text-lg',
      xl: 'min-w-12 px-4 py-4 text-xl',
    },
    colorOutline: {
      default: {
        light:
          'border-gray-700 text-gray-700 data-hover:bg-gray-700 data-hover:text-gray-100 data-selected:bg-gray-700 data-selected:text-gray-100',
        dark: 'dark:border-gray-300 dark:text-gray-300 dark:data-hover:bg-gray-300 dark:data-hover:text-gray-700 dark:data-selected:bg-gray-300 dark:data-selected:text-gray-700',
      },
      info: {
        light:
          'border-blue-700 text-blue-700 data-hover:bg-blue-700 data-hover:text-gray-100 data-selected:bg-blue-700 data-selected:text-gray-100',
        dark: 'dark:border-blue-700 dark:text-blue-600 dark:data-hover:bg-blue-700 dark:data-hover:text-gray-100 dark:data-selected:bg-blue-700 dark:data-selected:text-gray-100',
      },
      failure: {
        light:
          'border-red-700 text-red-700 data-hover:bg-red-700 data-hover:text-red-100 data-selected:bg-red-700 data-selected:text-red-100',
        dark: 'dark:border-red-700 dark:text-red-600 dark:data-hover:bg-red-700 dark:data-hover:text-gray-100 dark:data-selected:bg-red-700 dark:data-selected:text-gray-100',
      },
      success: {
        light:
          'border-green-700 text-green-700 data-hover:bg-green-700 data-hover:text-green-100 data-selected:bg-green-700 data-selected:text-green-100',
        dark: 'dark:border-green-700 dark:text-green-600 dark:data-hover:bg-green-700 dark:data-hover:text-gray-100 dark:data-selected:bg-green-700 dark:data-selected:text-gray-100',
      },
      warning: {
        light:
          'border-yellow-700 text-yellow-700 data-hover:bg-yellow-700 data-hover:text-yellow-100 data-selected:bg-yellow-700 data-selected:text-yellow-100',
        dark: 'dark:border-yellow-700 dark:text-yellow-600 dark:data-hover:bg-yellow-700 dark:data-hover:text-gray-100 dark:data-selected:bg-yellow-700 dark:data-selected:text-gray-100',
      },
      primary: {
        light:
          'border-primary-700 text-primary-700 data-hover:bg-primary-700 data-hover:text-primary-100 data-selected:bg-primary-700 data-selected:text-primary-100',
        dark: 'dark:border-primary-700 dark:text-primary-600 dark:data-hover:bg-primary-700 dark:data-selected:bg-primary-700 dark:data-hover:text-gray-100 dark:data-selected:text-gray-100',
      },
    },
  },
});
