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
        light: 'text-gray-800 data-hover:text-gray-900',
        dark: 'dark:text-white dark:data-hover:text-gray-100',
      },
      info: {
        light: 'text-gray-800 data-hover:text-blue-900',
        dark: 'dark:text-white dark:data-hover:text-blue-100',
      },
      failure: {
        light: 'text-gray-800 data-hover:text-red-900',
        dark: 'dark:text-white dark:data-hover:text-red-100',
      },
      success: {
        light: 'text-gray-800 data-hover:text-green-900',
        dark: 'dark:text-white dark:data-hover:text-green-100',
      },
      warning: {
        light: 'text-gray-800 data-hover:text-yellow-900',
        dark: 'dark:text-white dark:data-hover:text-yellow-100',
      },
      primary: {
        light: 'data-hover:text-primary-900 text-gray-800',
        dark: 'dark:data-hover:text-primary-100 dark:text-white',
      },
    },
    colorOutline: {} as FlowbiteBaseButtonColors,
  },
});
