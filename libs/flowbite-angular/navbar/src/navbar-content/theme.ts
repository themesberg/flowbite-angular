import type { FlowbiteNavbarColors } from '../navbar/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarContentTheme {
  host: FlowbiteNavbarContentHostTheme;
  container: FlowbiteNavbarContentContainerTheme;
}

export interface FlowbiteNavbarContentHostTheme {
  base: string;
  fixed: FlowbiteBoolean;
  open: FlowbiteBoolean;
}

export interface FlowbiteNavbarContentContainerTheme {
  base: string;
  color: FlowbiteNavbarColors;
}

export const flowbiteNavbarContentTheme: FlowbiteNavbarContentTheme = createTheme({
  host: {
    base: 'w-full overflow-hidden max-md:order-last md:flex md:w-auto',
    fixed: {
      on: '',
      off: '',
    },
    open: {
      on: '',
      off: 'hidden',
    },
  },
  container: {
    base: 'mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-4 md:border-0 md:p-0',
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
});
