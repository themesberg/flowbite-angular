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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AccordionPanelClass {}
