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
    colorOutline: {} as FlowbiteBaseButtonColors, // Not used for SidebarItem
  },
});
