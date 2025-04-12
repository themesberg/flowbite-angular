import { createTheme, type FlowbiteColors } from 'flowbite-angular';

export interface FlowbiteAccordionColors
  extends Pick<FlowbiteColors, 'primary' | 'light' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}

export interface FlowbiteAccordionTheme {
  host: FlowbiteAccordionHostTheme;
}

export interface FlowbiteAccordionHostTheme {
  base: string;
}

export const flowbiteAccordionTheme: FlowbiteAccordionTheme = createTheme({
  host: {
    base: '',
  },
});
