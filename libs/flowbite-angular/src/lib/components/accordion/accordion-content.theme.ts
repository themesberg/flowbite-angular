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
    blue: 'border-info-200 dark:border-info-700',
    red: 'border-failure-200 dark:border-failure-700',
    green: 'border-success-200 dark:border-success-700',
    yellow: 'border-warning-200 dark:border-warning-700',
  },
  isOpen: {
    enabled: 'p-5 border',
    disabled: '',
  },
});

export type AccordionContentClass = FlowbiteClass;
