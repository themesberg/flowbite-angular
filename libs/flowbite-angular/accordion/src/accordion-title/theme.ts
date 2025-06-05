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
    transition: 'transition-colors duration-150 ease-in-out',
    color: {
      default: {
        light: 'border-gray-200 bg-gray-100 text-gray-900 data-hover:bg-gray-200',
        dark: 'dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:data-hover:bg-gray-700',
      },
    },
    flush: {
      on: 'border-b bg-transparent data-hover:bg-transparent dark:bg-transparent dark:data-hover:bg-transparent',
      off: 'border not-data-open:bg-transparent not-data-open:dark:bg-transparent',
    },
  },
});
