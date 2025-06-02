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
    transition: 'transition-height duration-150 ease-in-out',
    color: {
      primary: 'border-primary-200 dark:border-primary-700',
      light: 'border-gray-200 dark:border-gray-700',
      blue: 'border-blue-200 dark:border-blue-700',
      red: 'border-red-200 dark:border-red-700',
      green: 'border-green-200 dark:border-green-700',
      yellow: 'border-yellow-200 dark:border-yellow-700',
    },
    open: {
      on: 'data-open:p-2',
      off: 'hidden',
    },
    flush: {
      on: '',
      off: 'border-x group-last/item:border-b',
    },
  },
});
