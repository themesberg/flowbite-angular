import type { FlowbiteFormFieldColors, FlowbiteFormFieldModes } from '../form-field/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteLabelTheme {
  host: FlowbiteLabelHostTheme;
}

export interface FlowbiteLabelHostTheme {
  base: string;
  color: FlowbiteFormFieldColors;
  mode: FlowbiteFormFieldModes;
}

export const flowbiteLabelTheme: FlowbiteLabelTheme = createTheme({
  host: {
    base: 'mb-2 block text-sm font-medium',
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
    mode: {
      normal: '',
      floating:
        'absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform transition-transform duration-150 ease-in-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium',
    },
  },
});
