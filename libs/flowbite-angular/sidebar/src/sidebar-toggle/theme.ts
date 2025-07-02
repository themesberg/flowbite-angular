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
    transition: '',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {} as FlowbiteBaseButtonSizes,
    pill: {} as FlowbiteBoolean,
    color: {
      default: {
        light: 'text-gray-900',
        dark: 'dark:text-gray-100',
      },
      info: {
        light: 'text-blue-900',
        dark: 'dark:text-blue-100',
      },
      failure: {
        light: 'text-red-900',
        dark: 'dark:text-red-100',
      },
      success: {
        light: 'text-green-900',
        dark: 'dark:text-green-100',
      },
      warning: {
        light: 'text-yellow-900',
        dark: 'dark:text-yellow-100',
      },
      primary: {
        light: 'text-primary-900',
        dark: 'dark:text-primary-100',
      },
    },
    colorOutline: {} as FlowbiteBaseButtonColors,
  },
});
