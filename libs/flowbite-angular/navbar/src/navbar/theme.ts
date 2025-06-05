import type { ColorToTheme, FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarColors extends FlowbiteColors {
  [key: string]: ColorToTheme;
}

export interface FlowbiteNavbarTheme {
  host: FlowbiteNavbarHostTheme;
  container: FlowbiteNavbarContainerTheme;
}

export interface FlowbiteNavbarHostTheme {
  base: string;
  fixed: FlowbiteBoolean;
  color: FlowbiteNavbarColors;
}

export interface FlowbiteNavbarContainerTheme {
  base: string;
}

export const flowbiteNavbarTheme: FlowbiteNavbarTheme = createTheme({
  host: {
    base: '',
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
      dark: {
        light: '',
        dark: '',
      },
      light: {
        light: '',
        dark: '',
      },
      blue: {
        light: '',
        dark: '',
      },
      cyan: {
        light: '',
        dark: '',
      },
      gray: {
        light: '',
        dark: '',
      },
      green: {
        light: '',
        dark: '',
      },
      indigo: {
        light: '',
        dark: '',
      },
      lime: {
        light: '',
        dark: '',
      },
      pink: {
        light: '',
        dark: '',
      },
      purple: {
        light: '',
        dark: '',
      },
      red: {
        light: '',
        dark: '',
      },
      teal: {
        light: '',
        dark: '',
      },
      yellow: {
        light: '',
        dark: '',
      },
    },
  },
  container: {
    base: 'mx-auto flex max-w-screen flex-wrap items-center justify-between p-4',
  },
});
