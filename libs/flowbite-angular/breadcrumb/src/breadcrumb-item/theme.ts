import type { FlowbiteBreadcrumbColors } from '../breadcrumb/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteBreadcrumbItemTheme {
  host: FlowbiteBreadcrumbItemHostTheme;
  icon: FlowbiteBreadcrumbItemIconTheme;
}

export interface FlowbiteBreadcrumbItemHostTheme {
  base: string;
  color: FlowbiteBreadcrumbColors;
}

export interface FlowbiteBreadcrumbItemIconTheme {
  base: string;
}

export const flowbiteBreadcrumbItemTheme: FlowbiteBreadcrumbItemTheme = createTheme({
  host: {
    base: 'group inline-flex items-center text-sm font-medium',
    color: {
      primary:
        'text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-500',
      dark: 'text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
      blue: 'text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-500',
      red: 'text-red-700 hover:text-red-900 dark:text-red-400 dark:hover:text-red-500',
      green: 'text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-500',
      yellow:
        'text-yellow-700 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-500',
    },
  },
  icon: {
    base: 'mr-2 h-4 w-4 group-first:hidden md:mx-2',
  },
});
