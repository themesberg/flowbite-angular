import type { FlowbiteFormFieldColors } from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteHelperTheme {
  host: FlowbiteHelperHostTheme;
}

export interface FlowbiteHelperHostTheme {
  base: string;
  transition: string;
  color: FlowbiteFormFieldColors;
}

export const flowbiteHelperTheme: FlowbiteHelperTheme = createTheme({
  host: {
    base: 'mt-2 text-sm',
    transition: '',
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
});
