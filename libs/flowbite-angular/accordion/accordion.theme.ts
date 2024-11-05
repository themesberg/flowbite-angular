import type { DeepPartial, FlowbiteClass, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region Component theme option
/**
 * Available colors for `AccordionComponent`
 */
export interface AccordionColors
  extends Pick<FlowbiteColors, 'primary' | 'light' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}
//#endregion

/**
 * Required properties for the class generation of `AccordionComponent`
 */
export interface AccordionProperties {
  customStyle: DeepPartial<AccordionTheme>;
}

/**
 * Theme definition for `AccordionComponent`
 */
export interface AccordionTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme for `AccordionComponent`
 */
export const accordionTheme: AccordionTheme = createTheme({
  root: {
    base: '',
  },
});

/**
 * Generated class definition for `AccordionComponent`
 */
export type AccordionClass = FlowbiteClass;
