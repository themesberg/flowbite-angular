import type { FlowbiteBoolean, FlowbiteClass } from '../../common';
import type { DeepPartial } from '../../common/flowbite.type';
import { createTheme } from '../../utils/theme/create-theme';
import type { AccordionColors } from './accordion.theme';

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
    base: 'cursor-pointer flex items-center p-5 justify-between',
    color: {
      primary:
        'text-primary-900 dark:text-primary-50 border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-800',
      blue: 'text-blue-900 dark:text-blue-50 border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-800',
      red: 'text-red-900 dark:text-red-50 border-red-200 dark:border-red-700 bg-red-100 dark:bg-red-800',
      green: 'text-green-900 dark:text-green-50 border-green-200 dark:border-green-700 bg-green-100 dark:bg-green-800',
      yellow:
        'text-yellow-900 dark:text-yellow-50 border-yellow-200 dark:border-yellow-700 bg-yellow-100 dark:bg-yellow-800',
    },
    isFlush: {
      enabled: '',
      disabled: 'border',
    },
    isOpen: {
      enabled: '',
      disabled: 'bg-transparent dark:bg-transparent',
    },
  },
  text: {
    base: 'font-bold text-lg',
  },
});

export interface AccordionTitleClass extends FlowbiteClass {
  textClass: string;
}
