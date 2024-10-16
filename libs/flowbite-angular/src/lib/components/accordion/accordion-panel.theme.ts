import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface AccordionPanelProperties {
  customStyle: DeepPartial<AccordionPanelTheme>;
}

export interface AccordionPanelTheme {
  root: {
    base: string;
  };
}

export const accordionPanelTheme: AccordionPanelTheme = createTheme({
  root: {
    base: 'group',
  },
});

export type AccordionPanelClass = FlowbiteClass;
