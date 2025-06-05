import type { ColorToTheme } from 'flowbite-angular';
import { createTheme, type FlowbiteColors } from 'flowbite-angular';

export interface FlowbiteAccordionColors extends Pick<FlowbiteColors, 'default'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteAccordionTheme {
  host: FlowbiteAccordionHostTheme;
}

export interface FlowbiteAccordionHostTheme {
  base: string;
}

export const flowbiteAccordionTheme: FlowbiteAccordionTheme = createTheme({
  host: {
    base: 'shadow-sm',
  },
});
