import type { FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FLowbiteDropdownColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

export interface FlowbiteDropdownTheme {
  host: FlowbiteDropdownHostTheme;
}

export interface FlowbiteDropdownHostTheme {
  base: string;
  color: FLowbiteDropdownColors;
}

export const flowbiteDropdownTheme: FlowbiteDropdownTheme = createTheme({
  host: {
    base: 'fixed z-10 w-max divide-y rounded-lg shadow-sm',
    color: {
      gray: 'divide-gray-200 bg-white dark:bg-gray-700',
    },
  },
});
