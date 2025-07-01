import type { ColorToTheme, FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarColors
  extends Pick<FlowbiteColors, 'default' | 'info' | 'failure' | 'success' | 'warning' | 'primary'> {
  [key: string]: ColorToTheme;
}

export interface FlowbiteNavbarTheme {
  host: FlowbiteNavbarHostTheme;
  container: FlowbiteNavbarContainerTheme;
}

export interface FlowbiteNavbarHostTheme {
  base: string;
  transition: string;
  fixed: FlowbiteBoolean;
  color: FlowbiteNavbarColors;
}

export interface FlowbiteNavbarContainerTheme {
  base: string;
  transition: string;
}

export const flowbiteNavbarTheme: FlowbiteNavbarTheme = createTheme({
  host: {
    base: '',
    transition: '',
    fixed: {
      on: 'fixed start-0 top-0 z-20 w-full border-b',
      off: '',
    },
    color: {
      default: {
        light: '',
        dark: '',
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
  container: {
    base: 'mx-auto flex max-w-screen flex-wrap items-center justify-between p-4',
    transition: '',
  },
});
