import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils';
import type { AccordionColors } from './accordion.theme';

export interface AccordionContentProperties {
  color: keyof AccordionColors;
  isOpen: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AccordionContentBaseTheme>;
}

export interface AccordionContentBaseTheme {
  base: string;
  color: AccordionColors;
  isOpen: FlowbiteBoolean;
}

export const accordionContentTheme: AccordionContentBaseTheme = createTheme({
  base: 'flex flex-col gap-2',
  color: {
    primary: 'border-primary-200 dark:border-primary-700',
    blue: 'border-blue-200 dark:border-blue-700',
    red: 'border-red-200 dark:border-red-700',
    green: 'border-green-200 dark:border-green-700',
    yellow: 'border-yellow-200 dark:border-yellow-700',
  },
  isOpen: {
    enabled: 'p-5 border',
    disabled: '',
  },
});

export type AccordionContentClass = FlowbiteClass;
