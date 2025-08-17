import type { ColorToTheme, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteTableColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteTableTheme {
  host: FlowbiteTableHostTheme;
}

export interface FlowbiteTableHostTheme {
  base: string;
  color: FlowbiteTableColors;
}

export const flowbiteTableTheme: FlowbiteTableTheme = createTheme({
  host: {
    base: 'w-full text-left text-sm',
    color: {
      default: {
        light: 'text-gray-500',
        dark: 'dark:text-gray-400',
      },
      info: {
        light: 'text-gray-500',
        dark: 'dark:text-gray-400',
      },
      failure: {
        light: 'text-gray-500',
        dark: 'dark:text-gray-400',
      },
      success: {
        light: 'text-gray-500',
        dark: 'dark:text-gray-400',
      },
      warning: {
        light: 'text-gray-500',
        dark: 'dark:text-gray-400',
      },
      primary: {
        light: 'text-gray-500',
        dark: 'dark:text-gray-400',
      },
    },
  },
});
