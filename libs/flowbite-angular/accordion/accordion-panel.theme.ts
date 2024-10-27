import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

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
