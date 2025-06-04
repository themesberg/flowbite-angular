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
  children: {
    base: string;
    icon: {
      base: string;
    };
  };
}

export const flowbiteAccordionTitleTheme: FlowbiteAccordionTitleTheme = createTheme({
  host: {
    base: 'flex w-full cursor-pointer flex-row items-center p-5 text-base font-semibold group-first/item:rounded-t-lg',
    transition: 'transition-colors duration-150 ease-in-out',
    color: {
      default:
        'border-gray-200 bg-gray-100 text-gray-500 data-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:data-hover:bg-gray-800',
      primary:
        'text-primary-900 dark:text-primary-50 border-primary-200 dark:border-primary-700 bg-primary-100 data-hover:bg-primary-100 dark:bg-primary-800 dark:data-hover:bg-primary-800',
      light:
        'border-gray-200 bg-gray-100 text-gray-900 data-hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:data-hover:bg-gray-800',
      blue: 'border-blue-200 bg-blue-100 text-blue-900 data-hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-50 dark:data-hover:bg-blue-800',
      red: 'border-red-200 bg-red-100 text-red-900 data-hover:bg-red-100 dark:border-red-700 dark:bg-red-800 dark:text-red-50 dark:data-hover:bg-red-800',
      green:
        'border-green-200 bg-green-100 text-green-900 data-hover:bg-green-100 dark:border-green-700 dark:bg-green-800 dark:text-green-50 dark:data-hover:bg-green-800',
      yellow:
        'border-yellow-200 bg-yellow-100 text-yellow-900 data-hover:bg-yellow-100 dark:border-yellow-700 dark:bg-yellow-800 dark:text-yellow-50 dark:data-hover:bg-yellow-800',
    },
    flush: {
      on: 'border-b bg-transparent data-hover:bg-transparent dark:bg-transparent dark:data-hover:bg-transparent',
      off: 'border not-data-open:bg-transparent not-data-open:dark:bg-transparent',
    },
    children: {
      base: '*:not-[flowbite-icon]:flex-1',
      icon: {
        base: '*:[flowbite-icon]:first:mr-2',
      },
    },
  },
});
