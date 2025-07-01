import type { FlowbiteBreadcrumbColors } from '../breadcrumb/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteBreadcrumbItemTheme {
  host: FlowbiteBreadcrumbItemHostTheme;
}

export interface FlowbiteBreadcrumbItemHostTheme {
  base: string;
  transition: string;
  color: FlowbiteBreadcrumbColors;
}

export const flowbiteBreadcrumbItemTheme: FlowbiteBreadcrumbItemTheme = createTheme({
  host: {
    base: 'group flex items-center justify-between text-sm font-medium data-hover:cursor-pointer',
    transition: '',
    color: {
      default: {
        light: 'text-gray-700 hover:text-gray-900',
        dark: 'dark:text-gray-400 dark:hover:text-white',
      },
      info: {
        light: 'text-blue-700 hover:text-blue-900',
        dark: 'dark:text-blue-400 dark:hover:text-blue-500',
      },
      failure: {
        light: 'text-red-700 hover:text-red-900',
        dark: 'dark:text-red-400 dark:hover:text-red-500',
      },
      success: {
        light: 'text-green-700 hover:text-green-900',
        dark: 'dark:text-green-400 dark:hover:text-green-500',
      },
      warning: {
        light: 'text-yellow-700 hover:text-yellow-900',
        dark: 'dark:text-yellow-400 dark:hover:text-yellow-500',
      },
      primary: {
        light: 'text-primary-700 dark:text-primary-400',
        dark: 'hover:text-primary-900 dark:hover:text-primary-500',
      },
    },
  },
});
