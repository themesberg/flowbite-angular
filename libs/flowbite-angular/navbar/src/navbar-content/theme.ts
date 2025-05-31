import type { FlowbiteNavbarColors } from '../navbar/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarContentTheme {
  host: FlowbiteNavbarContentHostTheme;
  container: FlowbiteNavbarContentContainerTheme;
}

export interface FlowbiteNavbarContentHostTheme {
  base: string;
  fixed: FlowbiteBoolean;
  open: FlowbiteBoolean;
}

export interface FlowbiteNavbarContentContainerTheme {
  base: string;
  color: FlowbiteNavbarColors;
}

export const flowbiteNavbarContentTheme: FlowbiteNavbarContentTheme = createTheme({
  host: {
    base: 'w-full overflow-hidden max-md:order-last md:flex md:w-auto',
    fixed: {
      on: '',
      off: '',
    },
    open: {
      on: '',
      off: 'hidden',
    },
  },
  container: {
    base: 'mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-4 md:border-0 md:p-0',
    color: {
      info: 'text-blue-600 max-md:bg-blue-100 max-md:dark:bg-blue-900',
      failure: 'text-red-600 max-md:bg-red-100 max-md:dark:bg-red-900',
      success: 'text-green-600 max-md:bg-green-100 max-md:dark:bg-green-900',
      warning: 'text-yellow-600 max-md:bg-yellow-100 max-md:dark:bg-yellow-900',
      primary: 'max-md:bg-primary-100 text-primary-600 max-md:dark:bg-primary-900',
      dark: 'text-gray-700 max-md:bg-gray-100 dark:text-gray-300 max-md:dark:bg-gray-900',
      light: 'text-gray-700 max-md:bg-gray-100 dark:text-gray-300 max-md:dark:bg-gray-900',
      blue: 'text-blue-600 max-md:bg-blue-100 max-md:dark:bg-blue-900',
      cyan: 'text-cyan-700 max-md:bg-cyan-100 max-md:dark:bg-cyan-900',
      gray: 'text-gray-700 max-md:bg-gray-100 dark:text-gray-300 max-md:dark:bg-gray-900',
      green: 'text-green-600 max-md:bg-green-100 max-md:dark:bg-green-900',
      indigo: 'text-indigo-700 max-md:bg-indigo-100 max-md:dark:bg-indigo-900',
      lime: 'text-lime-700 max-md:bg-lime-100 max-md:dark:bg-lime-900',
      pink: 'text-pink-700 max-md:bg-pink-100 max-md:dark:bg-pink-900',
      purple: 'text-purple-600 max-md:bg-purple-100 max-md:dark:bg-purple-900',
      red: 'text-red-700 max-md:bg-red-100 max-md:dark:bg-red-900',
      teal: 'text-teal-700 max-md:bg-teal-100 max-md:dark:bg-teal-900',
      yellow: 'text-yellow-400 max-md:bg-yellow-100 max-md:dark:bg-yellow-900',
    },
  },
});
