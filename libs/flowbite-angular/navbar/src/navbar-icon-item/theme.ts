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
    transition: 'transition-colors duration-150 ease-in-out',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {} as FlowbiteBaseButtonSizes, // Not used for NavbarToggle
    pill: {} as FlowbiteBoolean, // Not used for NavbarToggle
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
    colorOutline: {} as FlowbiteBaseButtonColors, // Not used for NavbarToggle
  },
});
