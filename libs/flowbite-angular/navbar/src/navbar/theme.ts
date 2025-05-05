import type { FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarColors extends FlowbiteColors {
  [key: string]: string;
}

export interface FlowbiteNavbarTheme {
  host: FlowbiteNavbarHostTheme;
  container: FlowbiteNavbarContainerTheme;
}

export interface FlowbiteNavbarHostTheme {
  base: string;
  fixed: FlowbiteBoolean;
  color: FlowbiteNavbarColors;
}

export interface FlowbiteNavbarContainerTheme {
  base: string;
}

export const flowbiteNavbarTheme: FlowbiteNavbarTheme = createTheme({
  host: {
    base: '',
    fixed: {
      on: 'fixed start-0 top-0 z-20 w-full border-b',
      off: '',
    },
    color: {
      info: 'border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-950',
      failure: 'border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-950',
      success: 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-950',
      warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-950',
      primary: 'border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-950',
      dark: 'border-gray-600 bg-gray-50 dark:border-gray-800 dark:bg-gray-950',
      light: 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950',
      blue: 'border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-950',
      cyan: 'border-cyan-200 bg-cyan-50 dark:border-cyan-700 dark:bg-cyan-950',
      gray: 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950',
      green: 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-950',
      indigo: 'border-indigo-200 bg-indigo-50 dark:border-indigo-700 dark:bg-indigo-950',
      lime: 'border-lime-200 bg-lime-50 dark:border-lime-700 dark:bg-lime-950',
      pink: 'border-pink-200 bg-pink-50 dark:border-pink-700 dark:bg-pink-950',
      purple: 'border-purple-200 bg-purple-50 dark:border-purple-700 dark:bg-purple-950',
      red: 'border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-950',
      teal: 'border-teal-200 bg-teal-50 dark:border-teal-700 dark:bg-teal-950',
      yellow: 'border-yellow-200 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-950',
    },
  },
  container: {
    base: 'mx-auto flex max-w-screen flex-wrap items-center justify-between p-4',
  },
});
