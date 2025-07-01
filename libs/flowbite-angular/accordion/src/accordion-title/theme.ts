import type { FlowbiteAccordionColors } from '../accordion/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteAccordionTitleTheme {
  host: FlowbiteAccordionTitleHostTheme;
}

export interface FlowbiteAccordionTitleHostTheme {
  base: string;
  transition: string;
  color: FlowbiteAccordionColors;
  flush: FlowbiteBoolean;
}

export const flowbiteAccordionTitleTheme: FlowbiteAccordionTitleTheme = createTheme({
  host: {
    base: 'flex w-full cursor-pointer flex-row items-center justify-between p-5 text-base font-medium group-first/item:rounded-t-lg',
    transition: '',
    color: {
      default: {
        light: 'border-gray-200 bg-gray-100 text-gray-900 data-hover:bg-gray-200',
        dark: 'dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:data-hover:bg-gray-700',
      },
      info: {
        light: 'border-blue-200 bg-blue-100 text-blue-900 data-hover:bg-blue-200',
        dark: 'dark:border-blue-700 dark:bg-blue-800 dark:text-white dark:data-hover:bg-blue-700',
      },
      failure: {
        light: 'border-red-200 bg-red-100 text-red-900 data-hover:bg-red-200',
        dark: 'dark:border-red-700 dark:bg-red-800 dark:text-white dark:data-hover:bg-red-700',
      },
      success: {
        light: 'border-green-200 bg-green-100 text-green-900 data-hover:bg-green-200',
        dark: 'dark:border-green-700 dark:bg-green-800 dark:text-white dark:data-hover:bg-green-700',
      },
      warning: {
        light: 'border-yellow-200 bg-yellow-100 text-yellow-900 data-hover:bg-yellow-200',
        dark: 'dark:border-yellow-700 dark:bg-yellow-800 dark:text-white dark:data-hover:bg-yellow-700',
      },
      primary: {
        light: 'border-primary-200 bg-primary-100 text-primary-900 data-hover:bg-primary-200',
        dark: 'dark:border-primary-700 dark:bg-primary-800 dark:data-hover:bg-primary-700 dark:text-white',
      },
    },
    flush: {
      on: 'border-b bg-transparent data-hover:bg-transparent dark:bg-transparent dark:data-hover:bg-transparent',
      off: 'border',
    },
  },
});
