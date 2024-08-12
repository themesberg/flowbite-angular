import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface AccordionPanelProperties {
  customStyle: DeepPartial<AccordionPanelBaseTheme>;
}

export interface AccordionPanelBaseTheme {
  base: string;
}

export const accordionPanelTheme: AccordionPanelBaseTheme = createTheme({
  base: '',
});

export type AccordionPanelClass = FlowbiteClass;
