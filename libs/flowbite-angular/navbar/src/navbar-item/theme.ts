import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';
import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from 'flowbite-angular/button';
import {
  flowbiteBaseButtonTheme,
  type FlowbiteBaseButtonHostTheme,
  type FlowbiteBaseButtonTheme,
} from 'flowbite-angular/button';

export interface FlowbiteNavbarItemTheme extends FlowbiteBaseButtonTheme {
  host: FlowbiteNavbarItemHostTheme;
}

export interface FlowbiteNavbarItemHostTheme extends FlowbiteBaseButtonHostTheme {
  base: string;
}

export const flowbiteNavbarItemTheme: FlowbiteNavbarItemTheme = createTheme({
  host: {
    base: 'm-0 block cursor-pointer rounded-sm px-3 py-2 md:border-0',
    transition: flowbiteBaseButtonTheme.host.transition,
    focus: flowbiteBaseButtonTheme.host.focus,
    disabled: flowbiteBaseButtonTheme.host.disabled,
    size: {} as FlowbiteBaseButtonSizes, // Not used for NavbarItem
    pill: {} as FlowbiteBoolean, // Not used for NavbarItem
    color: {
      info: 'text-gray-900 data-focus-visible:ring-blue-400 data-hover:text-blue-600 dark:text-gray-100 dark:data-focus-visible:ring-blue-600',
      failure:
        'text-gray-900 data-focus-visible:ring-red-400 data-hover:text-red-600 dark:text-gray-100 dark:data-focus-visible:ring-red-600',
      success:
        'text-gray-900 data-focus-visible:ring-green-400 data-hover:text-green-600 dark:text-gray-100 dark:data-focus-visible:ring-green-600',
      warning:
        'text-gray-900 data-focus-visible:ring-yellow-400 data-hover:text-yellow-600 dark:text-gray-100 dark:data-focus-visible:ring-yellow-600',
      primary:
        'data-hover:text-primary-600 data-focus-visible:ring-primary-400 dark:data-focus-visible:ring-primary-600 text-gray-900 dark:text-gray-100',
      dark: 'text-gray-900 data-focus-visible:ring-gray-300 data-hover:text-gray-700 dark:text-gray-100 dark:data-focus-visible:ring-gray-800 dark:data-hover:text-gray-300',
      light:
        'text-gray-900 data-focus-visible:ring-gray-100 data-hover:text-gray-700 dark:text-gray-100 dark:data-focus-visible:ring-gray-600 dark:data-hover:text-gray-300',
      blue: 'text-gray-900 data-focus-visible:ring-blue-400 data-hover:text-blue-600 dark:text-gray-100 dark:data-focus-visible:ring-blue-600',
      cyan: 'text-gray-900 data-focus-visible:ring-cyan-400 data-hover:text-cyan-700 dark:text-gray-100 dark:data-focus-visible:ring-cyan-600',
      gray: 'text-gray-900 data-focus-visible:ring-gray-400 data-hover:text-gray-700 dark:text-gray-100 dark:data-focus-visible:ring-gray-600 dark:data-hover:text-gray-300',
      green:
        'text-gray-900 data-focus-visible:ring-green-400 data-hover:text-green-600 dark:text-gray-100 dark:data-focus-visible:ring-green-600',
      indigo:
        'text-gray-900 data-focus-visible:ring-indigo-400 data-hover:text-indigo-700 dark:text-gray-100 dark:data-focus-visible:ring-indigo-600',
      lime: 'text-gray-900 data-focus-visible:ring-lime-400 data-hover:text-lime-700 dark:text-gray-100 dark:data-focus-visible:ring-lime-600',
      pink: 'text-gray-900 data-focus-visible:ring-pink-400 data-hover:text-pink-700 dark:text-gray-100 dark:data-focus-visible:ring-pink-600',
      purple:
        'text-gray-900 data-focus-visible:ring-purple-400 data-hover:text-purple-600 dark:text-gray-100 dark:data-focus-visible:ring-purple-600',
      red: 'text-gray-900 data-focus-visible:ring-red-400 data-hover:text-red-700 dark:text-gray-100 dark:data-focus-visible:ring-red-600',
      teal: 'text-gray-900 data-focus-visible:ring-teal-400 data-hover:text-teal-700 dark:text-gray-100 dark:data-focus-visible:ring-teal-600',
      yellow:
        'text-gray-900 data-focus-visible:ring-yellow-300 data-hover:text-yellow-400 dark:text-gray-100 dark:data-focus-visible:ring-yellow-500',
    },
    colorOutline: {} as FlowbiteBaseButtonColors, // Not used for NavbarItem
  },
});
