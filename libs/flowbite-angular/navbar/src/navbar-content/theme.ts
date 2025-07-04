import type { FlowbiteNavbarColors } from '../navbar/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarContentTheme {
  host: FlowbiteNavbarContentHostTheme;
  container: FlowbiteNavbarContentContainerTheme;
}

export interface FlowbiteNavbarContentHostTheme {
  base: string;
  transition: string;
  fixed: FlowbiteBoolean;
  open: FlowbiteBoolean;
}

export interface FlowbiteNavbarContentContainerTheme {
  base: string;
  transition: string;
  color: FlowbiteNavbarColors;
}

export const flowbiteNavbarContentTheme: FlowbiteNavbarContentTheme = createTheme({
  host: {
    base: 'w-full overflow-hidden max-md:order-last md:flex md:w-auto',
    transition: '',
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
    transition: '',
    color: {
      default: {
        light: 'bg-gray-200 md:bg-inherit',
        dark: 'dark:bg-gray-800 dark:md:bg-inherit',
      },
      info: {
        light: 'bg-gray-200 md:bg-inherit',
        dark: 'dark:bg-gray-800 dark:md:bg-inherit',
      },
      failure: {
        light: 'bg-gray-200 md:bg-inherit',
        dark: 'dark:bg-gray-800 dark:md:bg-inherit',
      },
      success: {
        light: 'bg-gray-200 md:bg-inherit',
        dark: 'dark:bg-gray-800 dark:md:bg-inherit',
      },
      warning: {
        light: 'bg-gray-200 md:bg-inherit',
        dark: 'dark:bg-gray-800 dark:md:bg-inherit',
      },
      primary: {
        light: 'bg-gray-200 md:bg-inherit',
        dark: 'dark:bg-gray-800 dark:md:bg-inherit',
      },
    },
  },
});
