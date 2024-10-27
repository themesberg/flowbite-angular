import type { AccordionColors } from './accordion.theme';

import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface AccordionTitleProperties {
  color: keyof AccordionColors;
  isOpen: keyof FlowbiteBoolean;
  isFlush: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AccordionTitleTheme>;
}

export interface AccordionTitleTheme {
  root: {
    base: string;
    color: AccordionColors;
    isFlush: FlowbiteBoolean;
    isOpen: FlowbiteBoolean;
  };
  text: {
    base: string;
  };
}

export const accordionTitleTheme: AccordionTitleTheme = createTheme({
  root: {
    base: 'cursor-pointer flex items-center p-5 justify-between group-first:rounded-t-lg',
    color: {
      primary:
        'text-primary-900 dark:text-primary-50 border-primary-200 dark:border-primary-700 bg-primary-100 hover:bg-primary-100 dark:bg-primary-800 dark:hover:bg-primary-800',
      light:
        'text-gray-900 dark:text-gray-50 border-gray-200 dark:border-gray-700 bg-gray-100 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800',
      blue: 'text-blue-900 dark:text-blue-50 border-blue-200 dark:border-blue-700 bg-blue-100 hover:bg-blue-100 dark:bg-blue-800 dark:hover:bg-blue-800',
      red: 'text-red-900 dark:text-red-50 border-red-200 dark:border-red-700 bg-red-100 hover:bg-red-100 dark:bg-red-800 dark:hover:bg-red-800',
      green:
        'text-green-900 dark:text-green-50 border-green-200 dark:border-green-700 bg-green-100 hover:bg-green-100 dark:bg-green-800 dark:hover:bg-green-800',
      yellow:
        'text-yellow-900 dark:text-yellow-50 border-yellow-200 dark:border-yellow-700 bg-yellow-100 hover:bg-yellow-100 dark:bg-yellow-800 dark:hover:bg-yellow-800',
    },
    isFlush: {
      enabled: 'border-b bg-transparent hover:bg-transparent',
      disabled: '',
    },
    isOpen: {
      enabled: '',
      disabled: 'bg-transparent dark:bg-transparent text-gray-500 ',
    },
  },
  text: {
    base: 'font-semibold text-base',
  },
});

export interface AccordionTitleClass extends FlowbiteClass {
  textClass: string;
}
