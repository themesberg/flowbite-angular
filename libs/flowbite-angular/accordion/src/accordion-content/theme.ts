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
      default: {
        light: 'border-gray-200 bg-white',
        dark: 'dark:border-gray-700 dark:bg-gray-900',
      },
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
