import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';
import type { FlowbiteBaseButtonColors } from 'flowbite-angular/button';
import {
  flowbiteBaseButtonTheme,
  type FlowbiteBaseButtonHostTheme,
  type FlowbiteBaseButtonSizes,
  type FlowbiteBaseButtonTheme,
} from 'flowbite-angular/button';

export interface FlowbiteNavbarIconItemTheme extends FlowbiteBaseButtonTheme {
  host: FlowbiteNavbarIconItemHostTheme;
}

export interface FlowbiteNavbarIconItemHostTheme extends FlowbiteBaseButtonHostTheme {
  base: string;
}

export const flowbiteNavbarIconItemTheme: FlowbiteNavbarIconItemTheme = createTheme({
  host: {
    base: 'hidden cursor-pointer items-center justify-center rounded-lg p-2 text-sm sm:inline-flex',
    transition: flowbiteBaseButtonTheme.host.transition,
    focus: flowbiteBaseButtonTheme.host.focus,
    disabled: flowbiteBaseButtonTheme.host.disabled,
    size: {} as FlowbiteBaseButtonSizes, // Not used for NavbarToggle
    pill: {} as FlowbiteBoolean, // Not used for NavbarToggle
    color: {
      info: 'data-hover:bg-blue-100 data-hover:text-blue-700',
      failure: 'data-hover:bg-red-100 data-hover:text-red-700',
      success: 'data-hover:bg-green-100 data-hover:text-green-700',
      warning: 'data-hover:bg-yellow-100 data-hover:text-yellow-700',
      primary: 'data-hover:bg-primary-100 data-hover:text-primary-700',
      dark: 'data-hover:bg-gray-100 data-hover:text-gray-900 dark:data-hover:bg-gray-800 dark:data-hover:text-gray-100',
      light:
        'data-hover:bg-gray-100 data-hover:text-gray-900 dark:data-hover:bg-gray-800 dark:data-hover:text-gray-100',
      blue: 'data-hover:bg-blue-100 data-hover:text-blue-700',
      cyan: 'data-hover:bg-cyan-100 data-hover:text-cyan-700',
      gray: 'data-hover:bg-gray-100 data-hover:text-gray-700 dark:data-hover:text-gray-100',
      green: 'data-hover:bg-green-100 data-hover:text-green-700',
      indigo: 'data-hover:bg-indigo-100 data-hover:text-indigo-700',
      lime: 'data-hover:bg-lime-100 data-hover:text-lime-700',
      pink: 'data-hover:bg-pink-100 data-hover:text-pink-700',
      purple: 'data-hover:bg-purple-100 data-hover:text-purple-800',
      red: 'data-hover:bg-red-100 data-hover:text-red-700',
      teal: 'data-hover:bg-teal-100 data-hover:text-teal-700',
      yellow: 'data-hover:bg-yellow-100 data-hover:text-yellow-400',
    },
    colorOutline: {} as FlowbiteBaseButtonColors, // Not used for NavbarToggle
  },
});
