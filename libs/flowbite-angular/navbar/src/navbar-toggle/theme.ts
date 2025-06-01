import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';
import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from 'flowbite-angular/button';

export interface FlowbiteNavbarToggleTheme {
  host: FlowbiteNavbarToggleHostTheme;
}

export interface FlowbiteNavbarToggleHostTheme {
  base: string;
  transition: string;
  focus: string;
  disabled: string;
  size: FlowbiteBaseButtonSizes;
  pill: FlowbiteBoolean;
  color: FlowbiteBaseButtonColors;
  colorOutline: FlowbiteBaseButtonColors;
}

export const flowbiteNavbarToggleTheme: FlowbiteNavbarToggleTheme = createTheme({
  host: {
    base: 'inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg p-2 text-sm md:hidden',
    transition: 'transition-colors duration-150 ease-in-out',
    focus:
      'data-focus:ring-0 data-focus:outline-none data-focus-visible:ring-2 data-focus-visible:outline-none',
    disabled: 'data-disabled:cursor-not-allowed data-disabled:opacity-50',
    size: {} as FlowbiteBaseButtonSizes, // Not used for NavbarToggle
    pill: {} as FlowbiteBoolean, // Not used for NavbarToggle
    color: {
      info: 'text-blue-700',
      failure: 'text-red-700',
      success: 'text-green-700',
      warning: 'text-yellow-700',
      primary: 'text-primary-700',
      dark: 'text-gray-900 dark:text-gray-100',
      light: 'text-gray-900 dark:text-gray-100',
      blue: 'text-blue-700',
      cyan: 'text-cyan-700',
      gray: 'text-gray-700 dark:text-gray-100',
      green: 'text-green-700',
      indigo: 'text-indigo-700',
      lime: 'text-lime-700',
      pink: 'text-pink-700',
      purple: 'text-purple-800',
      red: 'text-red-700',
      teal: 'text-teal-700',
      yellow: 'text-yellow-400',
    },
    colorOutline: {} as FlowbiteBaseButtonColors, // Not used for NavbarToggle
  },
});
