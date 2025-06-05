import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';
import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from 'flowbite-angular/button';

export interface FlowbiteSidebarToggleTheme {
  host: FlowbiteSidebarToggleHostTheme;
}

export interface FlowbiteSidebarToggleHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteBaseButtonSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteBaseButtonColors;
  colorOutline: FlowbiteBaseButtonColors;
}

export const flowbiteSidebarToggleTheme: FlowbiteSidebarToggleTheme = createTheme({
  host: {
    base: 'inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 text-sm lg:hidden',
    transition: 'transition-colors duration-150 ease-in-out',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {} as FlowbiteBaseButtonSizes, // Not used for SidebarToggle
    pill: {} as FlowbiteBoolean, // Not used for SidebarToggle
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
    colorOutline: {} as FlowbiteBaseButtonColors, // Not used for SidebarToggle
  },
});
