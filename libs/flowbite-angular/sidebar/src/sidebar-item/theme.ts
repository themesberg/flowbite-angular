import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';
import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from 'flowbite-angular/button';

export interface FlowbiteSidebarItemTheme {
  host: FlowbiteSidebarItemHostTheme;
}

export interface FlowbiteSidebarItemHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteBaseButtonSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteBaseButtonColors;
  colorOutline: FlowbiteBaseButtonColors;
}

export const flowbiteSidebarItemTheme: FlowbiteSidebarItemTheme = createTheme({
  host: {
    base: 'm-0 flex cursor-pointer flex-row rounded-sm px-3 py-2',
    transition: 'transition-colors duration-150 ease-in-out',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {} as FlowbiteBaseButtonSizes, // Not used for SidebarItem
    pill: {} as FlowbiteBoolean, // Not used for SidebarItem
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
    colorOutline: {} as FlowbiteBaseButtonColors, // Not used for SidebarItem
  },
});
