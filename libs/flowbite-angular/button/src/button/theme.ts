import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from '../base-button/theme';

import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteButtonTheme {
  host: FlowbiteButtonHostTheme;
}

export interface FlowbiteButtonHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteBaseButtonSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteBaseButtonColors;
  colorOutline: FlowbiteBaseButtonColors;
}

export const flowbiteButtonTheme: FlowbiteButtonTheme = createTheme({
  host: {
    base: 'flex cursor-pointer items-center justify-between border text-center font-medium',
    transition: '',
    focus: 'data-focus:ring-2',
    disabled: 'data-disabled:cursor-not-allowed',
    size: {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5 text-base',
    },
    pill: {
      on: 'rounded-full',
      off: 'rounded-lg',
    },
    color: {
      default: {
        light: 'bg-gray-100 text-gray-900',
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
    colorOutline: {
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
});
