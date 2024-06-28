import type { DeepPartial, FlowbiteClass } from '../../common';

export interface AccordionContentProperties {
  customStyle: DeepPartial<AccordionContentBaseTheme>;
}

export interface AccordionContentBaseTheme {
  base: string;
}

export const accordionContentTheme: AccordionContentBaseTheme = {
  base: 'block py-5 px-5 dark:bg-gray-900',
};

export type AccordionContentClass = FlowbiteClass;

export const AccordionContentClassInstance: AccordionContentClass = {
  rootClass: '',
};
