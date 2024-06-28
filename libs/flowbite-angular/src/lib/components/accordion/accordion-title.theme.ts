import type { FlowbiteBoolean, FlowbiteClass } from '../../common';
import type { Combination, DeepPartial } from '../../common/flowbite.type';
import { createTheme } from '../../utils/theme/create-theme';

export interface AccordionTitleProperties {
  isOpen: keyof FlowbiteBoolean;
  isFlush: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AccordionTitleBaseTheme>;
}

export interface AccordionTitleBaseTheme {
  base: string;
  flushAndOpen: Combination<keyof FlowbiteBoolean, keyof FlowbiteBoolean, string>;
}

export const accordionTitleTheme: AccordionTitleBaseTheme = createTheme({
  base: 'cursor-pointer flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
  flushAndOpen: {
    enabled: {
      enabled: 'text-gray-900 dark:text-white',
      disabled: '',
    },
    disabled: {
      enabled:
        'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800',
      disabled: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
    },
  },
});

export type AccordionTitleClass = FlowbiteClass;

export const AccordionTitleClassInstance: AccordionTitleClass = {
  rootClass: '',
};
