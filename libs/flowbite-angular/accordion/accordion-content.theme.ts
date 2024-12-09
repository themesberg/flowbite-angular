import type { AccordionColors } from './accordion.theme';

import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `AccordionContentComponent`
 */
export interface AccordionContentProperties {
  color: keyof AccordionColors;
  isFlush: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AccordionContentTheme>;
}

/**
 * Theme definition for `AccordionContentComponent`
 */
export interface AccordionContentTheme {
  root: {
    base: string;
    color: AccordionColors;
    isFlush: FlowbiteBoolean;
  };
}

/**
 * Default theme for `AccordionContentComponent`
 */
export const accordionContentTheme: AccordionContentTheme = createTheme({
  root: {
    base: 'flex flex-col overflow-hidden',
    color: {
      primary: 'border-primary-200 dark:border-primary-700',
      light: 'border-gray-200 dark:border-gray-700',
      blue: 'border-blue-200 dark:border-blue-700',
      red: 'border-red-200 dark:border-red-700',
      green: 'border-green-200 dark:border-green-700',
      yellow: 'border-yellow-200 dark:border-yellow-700',
    },
    isFlush: {
      enabled: '',
      disabled: 'border-x border-t group-last:border-b',
    },
  },
});

/**
 * Generated class definition for `AccordionContentComponent`
 */
export type AccordionContentClass = FlowbiteClass;
