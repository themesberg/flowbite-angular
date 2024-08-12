import type { FlowbiteBoolean, FlowbiteClass } from '../../common';
import type { DeepPartial } from '../../common/flowbite.type';
import { createTheme } from '../../utils/theme/create-theme';
import type { AccordionColors } from './accordion.theme';

export interface AccordionTitleProperties {
  color: keyof AccordionColors;
  isOpen: keyof FlowbiteBoolean;
  isFlush: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AccordionTitleBaseTheme>;
}

export interface AccordionTitleBaseTheme {
  base: string;
  color: AccordionColors;
  isFlush: FlowbiteBoolean;
  isOpen: FlowbiteBoolean;
}

export const accordionTitleTheme: AccordionTitleBaseTheme = createTheme({
  base: 'cursor-pointer flex items-center p-5 justify-between',
  color: {
    primary:
      'text-primary-900 dark:text-primary-50 border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-800',
    blue: 'text-info-900 dark:text-info-50 border-info-200 dark:border-info-700 bg-info-100 dark:bg-info-800',
    red: 'text-failure-900 dark:text-failure-50 border-failure-200 dark:border-failure-700 bg-failure-100 dark:bg-failure-800',
    green:
      'text-success-900 dark:text-success-50 border-success-200 dark:border-success-700 bg-success-100 dark:bg-success-800',
    yellow:
      'text-warning-900 dark:text-warning-50 border-warning-200 dark:border-warning-700 bg-warning-100 dark:bg-warning-800',
  },
  isFlush: {
    enabled: '',
    disabled: 'border',
  },
  isOpen: {
    enabled: '',
    disabled: 'bg-transparent dark:bg-transparent',
  },
});

export type AccordionTitleClass = FlowbiteClass;
