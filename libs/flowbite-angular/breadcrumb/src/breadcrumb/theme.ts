import type { FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteBreadcrumbColors
  extends Pick<
    FlowbiteColors,
    'default' | 'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow'
  > {
  [ket: string]: string;
}

export interface FlowbiteBreadcrumbTheme {
  host: FlowbiteBreadcrumbHostTheme;
}

export interface FlowbiteBreadcrumbHostTheme {
  base: string;
  solid: FlowbiteBoolean;
  color: FlowbiteBreadcrumbColors;
}

export const flowbiteBreadcrumbTheme: FlowbiteBreadcrumbTheme = createTheme({
  host: {
    base: 'inline-flex items-center gap-1 rounded-lg px-5 py-3',
    solid: {
      on: 'border',
      off: 'border-none bg-transparent',
    },
    color: {
      default: 'border-gray-300 bg-gray-100',
      primary: 'border-primary-300 bg-primary-100',
      dark: 'border-gray-300 bg-gray-100',
      blue: 'border-blue-300 bg-blue-100',
      red: 'border-red-300 bg-red-100',
      green: 'border-green-300 bg-green-100',
      yellow: 'border-yellow-300 bg-yellow-100',
    },
  },
});
