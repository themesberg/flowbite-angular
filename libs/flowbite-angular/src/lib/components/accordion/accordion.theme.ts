import { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';

export type AccordionProperties = {
  flush: keyof FlowbiteBoolean;
  customStyle: Partial<AccordionBaseTheme>;
};

export type AccordionBaseTheme = {
  root: Partial<AccordionRootTheme>;
};

export type AccordionRootTheme = {
  base: string;
  flush: Record<keyof FlowbiteBoolean, string>;
};

export const accordionTheme: AccordionBaseTheme = {
  root: {
    base: 'divide-y divide-gray-200 overflow-hidden border-gray-200 dark:divide-gray-700 dark:border-gray-700',
    flush: {
      enabled: 'border-b',
      disabled: 'rounded-lg border',
    },
  },
};

export type AccordionClass = FlowbiteClass;

export const AccordionClassInstance: AccordionClass = {
  rootClass: '',
};
