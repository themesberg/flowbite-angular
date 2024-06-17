import { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';

export type AccordionProperties = {
  isFlush: keyof FlowbiteBoolean;
  customStyle: Partial<AccordionBaseTheme>;
};

export type AccordionBaseTheme = {
  root: Partial<AccordionRootTheme>;
};

export type AccordionRootTheme = {
  base: string;
  isFlush: Record<keyof FlowbiteBoolean, string>;
};

export const accordionTheme: AccordionBaseTheme = {
  root: {
    base: 'divide-y divide-gray-200 overflow-hidden border-gray-200 dark:divide-gray-700 dark:border-gray-700',
    isFlush: {
      enabled: 'border-b',
      disabled: 'rounded-lg border',
    },
  },
};

export type AccordionClass = FlowbiteClass;

export const AccordionClassInstance: AccordionClass = {
  rootClass: '',
};
