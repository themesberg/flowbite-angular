import type { ColorToTheme, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteTooltipColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteTooltipTheme {
  host: FlowbiteTooltipHostTheme;
}

export interface FlowbiteTooltipHostTheme {
  base: string;
  transition: string;
  color: FlowbiteTooltipColors;
}

export const flowbiteTooltipTheme: FlowbiteTooltipTheme = createTheme({
  host: {
    base: 'absolute z-10 inline-block rounded-lg border p-3 py-2 text-sm font-medium shadow-xs',
    transition: '',
    color: {
      default: {
        light: 'border-gray-200 bg-white',
        dark: 'text-gray-900',
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
