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
    base: 'group inline-flex items-center justify-between text-sm font-medium data-hover:cursor-pointer',
    transition: '',
    color: {
      default: {
        light: 'text-gray-700 data-hover:text-gray-900',
        dark: 'dark:text-gray-100 dark:data-hover:text-white',
      },
      info: {
        light: 'text-blue-700 data-hover:text-blue-900',
        dark: 'dark:text-blue-100 dark:data-hover:text-blue-300',
      },
      failure: {
        light: 'text-red-700 data-hover:text-red-900',
        dark: 'dark:text-red-100 dark:data-hover:text-red-300',
      },
      success: {
        light: 'text-green-700 data-hover:text-green-900',
        dark: 'dark:text-green-100 dark:data-hover:text-green-300',
      },
      warning: {
        light: 'text-yellow-700 data-hover:text-yellow-900',
        dark: 'dark:text-yellow-100 dark:data-hover:text-yellow-300',
      },
      primary: {
        light: 'data-hover:text-primary-900 text-primary-700',
        dark: 'dark:text-primary-100 dark:data-hover:text-primary-300',
      },
    },
  },
});
