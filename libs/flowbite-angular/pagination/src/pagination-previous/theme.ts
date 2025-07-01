import type { FlowbitePaginationColors, FlowbitePaginationSizes } from '../pagination/theme';

import type { ColorToTheme } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbitePaginationPreviousSizes extends FlowbitePaginationSizes {
  [key: string]: string;
}

export interface FlowbitePaginationPreviousColors extends FlowbitePaginationColors {
  [key: string]: ColorToTheme;
}

export interface FlowbitePaginationPreviousTheme {
  host: FlowbitePaginationPreviousHostTheme;
}

export interface FlowbitePaginationPreviousHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbitePaginationPreviousSizes;
  colorOutline: FlowbitePaginationPreviousColors;
}

export const flowbitePaginationPreviousTheme: FlowbitePaginationPreviousTheme = createTheme({
  host: {
    base: 'flex h-full cursor-pointer items-center justify-center border border-transparent text-center font-medium',
    transition: '',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {
      xs: 'px-2.5 py-2 text-xs',
      sm: 'px-2.5 py-2 text-sm',
      md: 'px-3 py-2.5 text-sm',
      lg: 'px-3.5 py-3 text-base',
      xl: 'px-4 py-3.5 text-base',
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
