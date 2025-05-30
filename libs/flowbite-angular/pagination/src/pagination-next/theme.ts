import type { FlowbitePaginationColors, FlowbitePaginationSizes } from '../pagination/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbitePaginationNextSizes extends FlowbitePaginationSizes {
  [key: string]: string;
}

export interface FlowbitePaginationNextColors extends FlowbitePaginationColors {
  [key: string]: string;
}

export interface FlowbitePaginationNextTheme {
  host: FlowbitePaginationNextHostTheme;
}

export interface FlowbitePaginationNextHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbitePaginationNextSizes;
  colorOutline: FlowbitePaginationNextColors;
}

export const flowbitePaginationNextTheme: FlowbitePaginationNextTheme = createTheme({
  host: {
    base: 'flex h-full cursor-pointer items-center justify-center border border-transparent text-center font-medium',
    transition: 'transition-colors duration-150 ease-in-out',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {
      xs: 'px-2.5 py-2 text-xs',
      sm: 'px-2.5 py-2 text-sm',
      md: 'px-3 py-2.5 text-sm',
      lg: 'px-3.5 py-3 text-base',
      xl: 'px-4 py-3.5 text-base',
    },
    colorOutline: {
      info: 'border-blue-700 text-blue-700 data-focus-visible:ring-blue-400 data-hover:bg-blue-700 data-hover:text-gray-100 data-selected:bg-blue-700 data-selected:text-gray-100 dark:data-focus-visible:ring-blue-600',
      failure:
        'border-red-700 text-red-700 data-focus-visible:ring-red-400 data-hover:bg-red-700 data-hover:text-gray-100 data-selected:bg-red-700 data-selected:text-gray-100 dark:data-focus-visible:ring-red-600',
      success:
        'border-green-700 text-green-700 data-focus-visible:ring-green-400 data-hover:bg-green-700 data-hover:text-gray-100 data-selected:bg-green-700 data-selected:text-gray-100 dark:data-focus-visible:ring-green-600',
      warning:
        'border-yellow-700 text-yellow-700 data-focus-visible:ring-yellow-400 data-hover:bg-yellow-700 data-hover:text-gray-100 data-selected:bg-yellow-700 data-selected:text-gray-100 dark:data-focus-visible:ring-yellow-600',
      primary:
        'border-primary-700 text-primary-700 data-hover:bg-primary-700 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 data-selected:bg-primary-700 data-hover:text-gray-100 data-selected:text-gray-100',
      dark: 'border-gray-800 text-gray-900 data-focus-visible:ring-gray-300 data-hover:bg-gray-900 data-hover:text-white data-selected:bg-gray-700 data-selected:text-white dark:border-gray-600 dark:text-gray-400 dark:data-focus-visible:ring-gray-800 dark:data-hover:bg-gray-600 dark:data-hover:text-white',
      light:
        'border-gray-900 text-gray-900 data-focus-visible:ring-gray-100 data-hover:bg-gray-200 data-hover:text-gray-900 data-selected:bg-gray-200 data-selected:text-gray-900 dark:border-white dark:text-white dark:data-focus-visible:ring-gray-600',
      blue: 'border-blue-700 text-blue-700 data-focus-visible:ring-blue-400 data-hover:bg-blue-700 data-hover:text-gray-100 data-selected:bg-blue-700 data-selected:text-gray-100 dark:data-focus-visible:ring-blue-600',
      cyan: 'border-cyan-700 text-cyan-700 data-focus-visible:ring-cyan-400 data-hover:bg-cyan-700 data-hover:text-gray-100 data-selected:bg-cyan-700 data-selected:text-gray-100 dark:data-focus-visible:ring-cyan-600',
      gray: 'border-gray-700 text-gray-700 data-focus-visible:ring-gray-400 data-hover:bg-gray-700 data-hover:text-gray-100 data-selected:bg-gray-700 data-selected:text-gray-100 dark:data-focus-visible:ring-gray-600',
      green:
        'border-green-700 text-green-700 data-focus-visible:ring-green-400 data-hover:bg-green-700 data-hover:text-gray-100 data-selected:bg-green-700 data-selected:text-gray-100 dark:data-focus-visible:ring-green-600',
      indigo:
        'border-indigo-700 text-indigo-700 data-focus-visible:ring-indigo-400 data-hover:bg-indigo-700 data-hover:text-gray-100 data-selected:bg-indigo-700 data-selected:text-gray-100 dark:data-focus-visible:ring-indigo-600',
      lime: 'border-lime-700 text-lime-700 data-focus-visible:ring-lime-400 data-hover:bg-lime-700 data-hover:text-gray-100 data-selected:bg-lime-700 data-selected:text-gray-100 dark:data-focus-visible:ring-lime-600',
      pink: 'border-pink-700 text-pink-700 data-focus-visible:ring-pink-400 data-hover:bg-pink-700 data-hover:text-gray-100 data-selected:bg-pink-700 data-selected:text-gray-100 dark:data-focus-visible:ring-pink-600',
      purple:
        'border-purple-800 text-purple-800 data-focus-visible:ring-purple-400 data-hover:bg-purple-800 data-hover:text-gray-100 data-selected:bg-purple-700 data-selected:text-gray-100 dark:data-focus-visible:ring-purple-600',
      red: 'border-red-700 text-red-700 data-focus-visible:ring-red-400 data-hover:bg-red-700 data-hover:text-gray-100 data-selected:bg-red-700 data-selected:text-gray-100 dark:data-focus-visible:ring-red-600',
      teal: 'border-teal-700 text-teal-700 data-focus-visible:ring-teal-400 data-hover:bg-teal-700 data-hover:text-gray-100 data-selected:bg-teal-700 data-selected:text-gray-100 dark:data-focus-visible:ring-teal-600',
      yellow:
        'border-yellow-400 text-yellow-400 data-focus-visible:ring-yellow-300 data-hover:bg-yellow-400 data-hover:text-gray-100 data-selected:bg-yellow-700 data-selected:text-gray-100 dark:data-focus-visible:ring-yellow-500',
    },
  },
});
