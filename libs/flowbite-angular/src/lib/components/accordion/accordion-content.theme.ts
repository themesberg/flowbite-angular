import { FlowbiteClass } from '../../common';

export interface AccordionContentProperties {
  customStyle: Partial<AccordionContentBaseTheme>;
}

export interface AccordionContentBaseTheme {
  root: Partial<AccordionContentRootTheme>;
}

export interface AccordionContentRootTheme {
  base: string;
}

export const accordionContentTheme: AccordionContentBaseTheme = {
  root: {
    base: 'block py-5 px-5 dark:bg-gray-900',
  },
};

export type AccordionContentClass = FlowbiteClass;

export const AccordionContentClassInstance: AccordionContentClass = {
  rootClass: '',
};
