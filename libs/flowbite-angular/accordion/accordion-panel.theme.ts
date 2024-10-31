import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for th class generation of `AccordionPanelComponent`
 */
export interface AccordionPanelProperties {
  customStyle: DeepPartial<AccordionPanelTheme>;
}

/**
 * Theme definition for `AccordionPanelComponent`
 */
export interface AccordionPanelTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme for `AccordionPanelComponent`
 */
export const accordionPanelTheme: AccordionPanelTheme = createTheme({
  root: {
    base: 'group',
  },
});

/**
 * Generated class definition for `AccordionPanelComponent`
 */
export type AccordionPanelClass = FlowbiteClass;
