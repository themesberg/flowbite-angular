import { FlowbiteClass } from '../../common';

export type AccordionPanelProperties = {
  customStyle: Partial<AccordionPanelBaseTheme>;
};

export type AccordionPanelBaseTheme = {
  root: Partial<AccordionPanelRootTheme>;
};

export type AccordionPanelRootTheme = {
  base: string;
};

export const accordionPanelTheme: AccordionPanelBaseTheme = {
  root: {
    base: '',
  },
};

export type AccordionPanelClass = FlowbiteClass;

export const AccordionPanelClassInstance: AccordionPanelClass = {
  rootClass: '',
};
