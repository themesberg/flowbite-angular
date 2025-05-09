import type { FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteSidebarColors extends FlowbiteColors {}

export interface FlowbiteSidebarTheme {
  host: FlowbiteSidebarHostTheme;
}

export interface FlowbiteSidebarHostTheme {
  base: string;
  transition: string;
  open: FlowbiteBoolean;
  color: FlowbiteSidebarColors;
}

export const flowbiteSidebarTheme: FlowbiteSidebarTheme = createTheme({
  host: {
    base: 'fixed top-0 left-0 z-40 h-screen w-full md:block md:w-44',
    transition: 'transition-transform duration-150 ease-in-out',
    open: {
      on: 'translate-x-0 backdrop-blur-sm',
      off: '-translate-x-full',
    },
    color: {
      info: 'bg-blue-50/25 dark:bg-blue-950/25',
      failure: 'bg-red-50/25 dark:bg-red-950/25',
      success: 'bg-green-50/25 dark:bg-green-950/25',
      warning: 'bg-yellow-50/25 dark:bg-yellow-950/25',
      primary: 'dark:border-primary-50/25 dark:bg-primary-950/25',
      dark: 'bg-gray-50/25 dark:bg-gray-950/25',
      light: 'bg-gray-50/25 dark:bg-gray-950/25',
      blue: 'bg-blue-50/25 dark:bg-blue-950/25',
      cyan: 'bg-cyan-50/25 dark:bg-cyan-950/25',
      gray: 'bg-gray-50/25 dark:bg-gray-950/25',
      green: 'bg-green-50/25 dark:bg-green-950/25',
      indigo: 'bg-indigo-50/25 dark:bg-indigo-950/25',
      lime: 'bg-lime-50/25 dark:bg-lime-950/25',
      pink: 'bg-pink-50/25 dark:bg-pink-950/25',
      purple: 'bg-purple-50/25 dark:bg-purple-950/25',
      red: 'bg-red-50/25 dark:bg-red-950/25',
      teal: 'bg-teal-50/25 dark:bg-teal-950/25',
      yellow: 'bg-yellow-50/25 dark:bg-yellow-950/25',
    },
  },
});
