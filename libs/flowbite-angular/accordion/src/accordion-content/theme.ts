import type { FlowbiteAccordionColors } from '../accordion/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteAccordionContentTheme {
  host: FlowbiteAccordionContentHostTheme;
}

export interface FlowbiteAccordionContentHostTheme {
  base: string;
  transition: string;
  color: FlowbiteAccordionColors;
  flush: FlowbiteBoolean;
  open: FlowbiteBoolean;
}

export const flowbiteAccordionContentTheme: FlowbiteAccordionContentTheme = createTheme({
  host: {
    base: 'overflow-hidden',
    transition: '',
    color: {
      default: {
        light: 'border-gray-200 bg-white',
        dark: 'dark:border-gray-700 dark:bg-gray-900',
      },
      info: {
        light: 'border-blue-200 bg-white',
        dark: 'dark:border-blue-700 dark:bg-gray-900',
      },
      failure: {
        light: 'border-red-200 bg-white',
        dark: 'dark:border-red-700 dark:bg-gray-900',
      },
      success: {
        light: 'border-green-200 bg-white',
        dark: 'dark:border-green-700 dark:bg-gray-900',
      },
      warning: {
        light: 'border-yellow-200 bg-white',
        dark: 'dark:border-yellow-700 dark:bg-gray-900',
      },
      primary: {
        light: 'border-primary-200 bg-white',
        dark: 'dark:border-primary-700 dark:bg-gray-900',
      },
    },
    open: {
      on: 'h-fit',
      off: 'h-0',
    },
    flush: {
      on: 'bg-transparent dark:bg-transparent',
      off: 'border-x group-last/item:border-b',
    },
  },
});
