import { createTheme } from 'flowbite-angular';

export interface FlowbiteAccordionItemTheme {
  host: FlowbiteAccordionItemHostTheme;
}

export interface FlowbiteAccordionItemHostTheme {
  base: string;
  transition: string;
}

export const flowbiteAccordionItemTheme: FlowbiteAccordionItemTheme = createTheme({
  host: {
    base: 'group/item',
    transition: '',
  },
});
