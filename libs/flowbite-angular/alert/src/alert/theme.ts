import type { ColorToTheme, FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteAlertColors
  extends Pick<FlowbiteColors, 'default' | 'success' | 'danger' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteAlertTheme {
  host: FlowbiteAlertHostTheme;
}

export interface FlowbiteAlertHostTheme {
  base: string;
  color: FlowbiteAlertColors;
  border: FlowbiteBoolean;
  accent: FlowbiteBoolean;
}

export const flowbiteAlertTheme: FlowbiteAlertTheme = createTheme({
  host: {
    base: 'mb-4 rounded-lg p-4',
    color: {
      danger: {
        light: 'bg-red-50',
        dark: 'dark:bg-gray-800',
      },
      default: {
        light: 'bg-gray-50',
        dark: 'dark:bg-gray-800',
      },
      primary: {
        light: 'bg-primary-50',
        dark: 'dark:bg-gray-800',
      },
      success: {
        light: 'bg-green-50',
        dark: 'dark:bg-gray-800',
      },
      warning: {
        light: 'bg-yellow-50',
        dark: 'dark:bg-gray-800',
      },
    },
    border: {
      on: 'border',
      off: 'border-0',
    },
    accent: {
      on: 'border-t-4',
      off: '',
    },
  },
});
