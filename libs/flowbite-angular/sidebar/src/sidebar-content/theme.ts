import type { FlowbiteSidebarColors } from '../sidebar/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteSidebarContentTheme {
  host: FlowbiteSidebarContentHostTheme;
  container: FlowbiteSidebarContentContainerTheme;
}

export interface FlowbiteSidebarContentHostTheme {
  base: string;
  transition: string;
  open: FlowbiteBoolean;
  color: FlowbiteSidebarColors;
}

export interface FlowbiteSidebarContentContainerTheme {
  base: string;
}

export const flowbiteSidebarContentTheme: FlowbiteSidebarContentTheme = createTheme({
  host: {
    base: 'h-full overflow-y-auto border-r px-3 py-4 lg:translate-x-0 lg:border-0',
    transition: '',
    open: {
      on: 'w-64 translate-x-0',
      off: '-translate-x-full',
    },
    color: {
      default: {
        light: 'border-gray-200 bg-gray-100',
        dark: 'dark:border-gray-800 dark:bg-gray-900',
      },
      info: {
        light: 'border-blue-200 bg-gray-100',
        dark: 'dark:border-blue-800 dark:bg-gray-900',
      },
      failure: {
        light: 'border-red-200 bg-gray-100',
        dark: 'dark:border-red-800 dark:bg-gray-900',
      },
      success: {
        light: 'border-green-200 bg-gray-100',
        dark: 'dark:border-green-800 dark:bg-gray-900',
      },
      warning: {
        light: 'border-yellow-200 bg-gray-100',
        dark: 'dark:border-yellow-800 dark:bg-gray-900',
      },
      primary: {
        light: 'border-primary-200 bg-gray-100',
        dark: 'dark:border-primary-800 dark:bg-gray-900',
      },
    },
  },
  container: {
    base: 'space-y-2 font-medium',
  },
});
