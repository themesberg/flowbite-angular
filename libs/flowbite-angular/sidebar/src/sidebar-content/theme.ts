import type { FlowbiteSidebarColors } from '../sidebar/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteSidebarContentTheme {
  host: FlowbiteSidebarContentHostTheme;
  container: FlowbiteSidebarContentContainerTheme;
}

export interface FlowbiteSidebarContentHostTheme {
  base: string;
  transition: string;
  open: FlowbiteBoolean;
  color: FlowbiteSidebarColors;
}

export interface FlowbiteSidebarContentContainerTheme {
  base: string;
}

export const flowbiteSidebarContentTheme: FlowbiteSidebarContentTheme = createTheme({
  host: {
    base: 'h-full overflow-y-auto px-3 py-4 lg:translate-x-0',
    transition: 'transition-transform duration-150 ease-in-out',
    open: {
      on: 'w-64 translate-x-0',
      off: '-translate-x-full',
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
    base: 'space-y-2 font-medium',
  },
});
