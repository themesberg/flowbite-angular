import type { FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteTooltipColors extends Pick<FlowbiteColors, 'default' | 'light' | 'dark'> {
  [key: string]: string;
}

export interface FlowbiteTooltipTheme {
  host: FlowbiteTooltipHostTheme;
}

export interface FlowbiteTooltipHostTheme {
  base: string;
  color: FlowbiteTooltipColors;
}

export const flowbiteTooltipTheme: FlowbiteTooltipTheme = createTheme({
  host: {
    base: 'absolute z-10 inline-block rounded-lg p-3 py-2 text-sm font-medium shadow-xs',
    color: {
      default: 'border border-gray-200 bg-white text-gray-900',
      light: 'border border-gray-200 bg-white text-gray-900',
      dark: 'bg-gray-900 text-white dark:bg-gray-700',
    },
  },
});
