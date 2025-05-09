import type { FlowbiteSidebarColors } from '../sidebar/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteSidebarContentTheme {
  host: FlowbiteSidebarContentHostTheme;
  container: FlowbiteSidebarContentContainerTheme;
}

export interface FlowbiteSidebarContentHostTheme {
  base: string;
  open: FlowbiteBoolean;
  color: FlowbiteSidebarColors;
}

export interface FlowbiteSidebarContentContainerTheme {
  base: string;
}

export const flowbiteSidebarContentTheme: FlowbiteSidebarContentTheme = createTheme({
  host: {
    base: 'h-full overflow-y-auto md:w-full md:border-e',
    open: {
      on: 'w-44 border-e',
      off: '',
    },
    color: {
      info: 'border-blue-300 bg-blue-50 dark:bg-blue-950',
      failure: 'border-red-300 bg-red-50 dark:bg-red-950',
      success: 'border-green-300 bg-green-50 dark:bg-green-950',
      warning: 'border-yellow-300 bg-yellow-50 dark:bg-yellow-950',
      primary: 'border-primary-300 bg-primary-50 dark:bg-primary-950',
      dark: 'border-gray-300 bg-gray-50 dark:bg-gray-950',
      light: 'border-gray-300 bg-gray-50 dark:bg-gray-950',
      blue: 'border-blue-300 bg-blue-50 dark:bg-blue-950',
      cyan: 'border-cyan-300 bg-cyan-50 dark:bg-cyan-950',
      gray: 'border-gray-300 bg-gray-50 dark:bg-gray-950',
      green: 'border-green-300 bg-green-50 dark:bg-green-950',
      indigo: 'border-indigo-300 bg-indigo-50 dark:bg-indigo-950',
      lime: 'border-lime-300 bg-lime-50 dark:bg-lime-950',
      pink: 'border-pink-300 bg-pink-50 dark:bg-pink-950',
      purple: 'border-purple-300 bg-purple-50 dark:bg-purple-950',
      red: 'border-red-300 bg-red-50 dark:bg-red-950',
      teal: 'border-teal-300 bg-teal-50 dark:bg-teal-950',
      yellow: 'border-yellow-300 bg-yellow-50 dark:bg-yellow-950',
    },
  },
  container: {
    base: 'h-full w-full space-y-2 px-3 py-4 font-medium',
  },
});
