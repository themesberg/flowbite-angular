import type { FlowbiteFormFieldColors } from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteHelperTheme {
  host: FlowbiteHelperHostTheme;
}

export interface FlowbiteHelperHostTheme {
  base: string;
  color: FlowbiteFormFieldColors;
}

export const flowbiteHelperTheme: FlowbiteHelperTheme = createTheme({
  host: {
    base: 'mt-2 text-sm',
    color: {
      blue: {
        light: '',
        dark: '',
      },
      cyan: {
        light: '',
        dark: '',
      },
      dark: {
        light: '',
        dark: '',
      },
      default: {
        light: '',
        dark: '',
      },
      failure: {
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
      info: {
        light: '',
        dark: '',
      },
      light: {
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
      primary: {
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
      success: {
        light: '',
        dark: '',
      },
      teal: {
        light: '',
        dark: '',
      },
      warning: {
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
