import type { FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteCardColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

export interface FlowbiteCardTheme {
  host: FlowbiteCardHostTheme;
}

export interface FlowbiteCardHostTheme {
  base: string;
  color: FlowbiteCardColors;
}

export const flowbiteCardTheme: FlowbiteCardTheme = createTheme({
  host: {
    base: 'block max-w-sm rounded-lg border p-6 shadow-sm',
    color: {
      gray: 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
    },
  },
});
