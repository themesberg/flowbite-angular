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
    base: 'h-full overflow-y-auto px-3 py-4 lg:translate-x-0',
    transition: 'transition-transform duration-150 ease-in-out',
    open: {
      on: 'w-64 translate-x-0',
      off: '-translate-x-full',
    },
    color: {
      default: 'bg-gray-50 dark:bg-gray-950',
      info: 'bg-blue-50 dark:bg-blue-950',
      failure: 'bg-red-50 dark:bg-red-950',
      success: 'bg-green-50 dark:bg-green-950',
      warning: 'bg-yellow-50 dark:bg-yellow-950',
      primary: 'bg-primary-50 dark:bg-primary-950',
      dark: 'bg-gray-50 dark:bg-gray-950',
      light: 'bg-gray-50 dark:bg-gray-800',
      blue: 'bg-blue-50 dark:bg-blue-950',
      cyan: 'bg-cyan-50 dark:bg-cyan-950',
      gray: 'bg-gray-50 dark:bg-gray-950',
      green: 'bg-green-50 dark:bg-green-950',
      indigo: 'bg-indigo-50 dark:bg-indigo-950',
      lime: 'bg-lime-50 dark:bg-lime-950',
      pink: 'bg-pink-50 dark:bg-pink-950',
      purple: 'bg-purple-50 dark:bg-purple-950',
      red: 'bg-red-50 dark:bg-red-950',
      teal: 'bg-teal-50 dark:bg-teal-950',
      yellow: 'bg-yellow-50 dark:bg-yellow-950',
    },
  },
  container: {
    base: 'space-y-2 font-medium',
  },
});
