import type { FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteBreadcrumbColors
  extends Pick<FlowbiteColors, 'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow'> {
  [ket: string]: string;
}

export interface FlowbiteBreadcrumbTheme {
  host: FlowbiteBreadcrumbHostTheme;
  list: FlowbiteBreadcrumbListTheme;
}

export interface FlowbiteBreadcrumbHostTheme {
  base: string;
}

export interface FlowbiteBreadcrumbListTheme {
  base: string;
}

export const flowbiteBreadcrumbTheme: FlowbiteBreadcrumbTheme = createTheme({
  host: {
    base: 'flex',
  },
  list: {
    base: 'inline-flex items-center space-x-1 md:space-x-2',
  },
});
