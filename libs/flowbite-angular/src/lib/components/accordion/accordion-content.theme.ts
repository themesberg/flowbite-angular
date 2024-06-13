import { FlowbiteClass } from '../../common';

export type AccordionContentProperties = {
  customStyle: Partial<AccordionContentBaseTheme>;
};

export type AccordionContentBaseTheme = {
  root: Partial<AccordionContentRootTheme>;
};

export type AccordionContentRootTheme = {
  base: string;
};

export const accordionContentTheme: AccordionContentBaseTheme = {
  root: {
    base: 'block py-5 px-5 dark:bg-gray-900',
  },
};

export type AccordionContentClass = FlowbiteClass;

export const AccordionContentClassInstance: AccordionContentClass = {
  rootClass: '',
};
