import { FlowbiteClass } from '../../common';

export interface AccordionPanelProperties {
  customStyle: Partial<AccordionPanelBaseTheme>;
}

export interface AccordionPanelBaseTheme {
  root: Partial<AccordionPanelRootTheme>;
}

export interface AccordionPanelRootTheme {
  base: string;
}

export const accordionPanelTheme: AccordionPanelBaseTheme = {
  root: {
    base: '',
  },
};

export type AccordionPanelClass = FlowbiteClass;

export const AccordionPanelClassInstance: AccordionPanelClass = {
  rootClass: '',
};
