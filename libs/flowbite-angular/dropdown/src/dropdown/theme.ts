import type { ColorToTheme, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FLowbiteDropdownColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteDropdownTheme {
  host: FlowbiteDropdownHostTheme;
}

export interface FlowbiteDropdownHostTheme {
  base: string;
  transition: string;
  color: FLowbiteDropdownColors;
}

export const flowbiteDropdownTheme: FlowbiteDropdownTheme = createTheme({
  host: {
    base: 'fixed z-10 w-max divide-y rounded-lg shadow-sm',
    transition: '',
    color: {
      default: {
        light: 'divide-gray-200 bg-white',
        dark: 'dark:bg-gray-700',
      },
      info: {
        light: '',
        dark: '',
      },
      failure: {
        light: '',
        dark: '',
      },
      success: {
        light: '',
        dark: '',
      },
      warning: {
        light: '',
        dark: '',
      },
      primary: {
        light: '',
        dark: '',
      },
    },
  },
});
