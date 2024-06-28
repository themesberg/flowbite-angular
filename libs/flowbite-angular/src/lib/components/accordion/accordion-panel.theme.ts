import { DeepPartial, FlowbiteClass } from '../../common';

export interface AccordionPanelProperties {
  customStyle: DeepPartial<AccordionPanelBaseTheme>;
}

export interface AccordionPanelBaseTheme {
  base: string;
}

export const accordionPanelTheme: AccordionPanelBaseTheme = {
  base: '',
};

export type AccordionPanelClass = FlowbiteClass;

export const AccordionPanelClassInstance: AccordionPanelClass = {
  rootClass: '',
};
