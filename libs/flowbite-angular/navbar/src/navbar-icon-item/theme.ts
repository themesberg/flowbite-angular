import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';
import type { FlowbiteBaseButtonColors } from 'flowbite-angular/button';
import { type FlowbiteBaseButtonSizes } from 'flowbite-angular/button';

export interface FlowbiteNavbarIconItemTheme {
  host: FlowbiteNavbarIconItemHostTheme;
}

export interface FlowbiteNavbarIconItemHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteBaseButtonSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteBaseButtonColors;
  colorOutline: FlowbiteBaseButtonColors;
}

export const flowbiteNavbarIconItemTheme: FlowbiteNavbarIconItemTheme = createTheme({
  host: {
    base: 'hidden cursor-pointer items-center justify-center rounded-lg p-2 text-sm sm:inline-flex',
    transition: '',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {} as FlowbiteBaseButtonSizes,
    pill: {} as FlowbiteBoolean,
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
    colorOutline: {} as FlowbiteBaseButtonColors,
  },
});
