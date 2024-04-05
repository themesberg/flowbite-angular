import { FlowbiteBoolean } from '../../common/flowbite.theme';

export interface AccordionPanelProperties {
  open: keyof FlowbiteBoolean;
}

export interface AccordionPanelBaseTheme {
  root: Partial<AccordionPanelRootTheme>;
}

export interface AccordionPanelRootTheme {
  base: string;
}

export interface AccordionPanelClass {}
