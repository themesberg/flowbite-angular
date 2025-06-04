import type { FlowbiteBreadcrumbColors } from '../breadcrumb/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteBreadcrumbItemTheme {
  host: FlowbiteBreadcrumbItemHostTheme;
}

export interface FlowbiteBreadcrumbItemHostTheme {
  base: string;
  transition: string;
  color: FlowbiteBreadcrumbColors;
  children: {
    base: string;
    icon: {
      base: string;
    };
  };
}

export const flowbiteBreadcrumbItemTheme: FlowbiteBreadcrumbItemTheme = createTheme({
  host: {
    base: 'group flex flex-row items-center text-sm font-medium data-hover:cursor-pointer',
    transition: 'transition-colors duration-150 ease-in-out',
    color: {
      default: 'text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
      primary:
        'text-primary-700 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-500',
      dark: 'text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
      blue: 'text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-500',
      red: 'text-red-700 hover:text-red-900 dark:text-red-400 dark:hover:text-red-500',
      green: 'text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-500',
      yellow:
        'text-yellow-700 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-500',
    },
    children: {
      base: '',
      icon: {
        base: '*:[flowbite-icon]:size-4 *:[flowbite-icon]:first:mr-2 *:[flowbite-icon]:last:ml-2',
      },
    },
  },
});
