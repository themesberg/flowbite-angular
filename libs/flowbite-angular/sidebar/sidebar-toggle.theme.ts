import type { SidebarColors } from './sidebar.theme';

import type { DeepPartial, FlowbiteClass, FlowbiteSizes } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region region Component theme option
/**
 * Available sizes for `SidebarToggleComponent`
 */
export interface SidebarToggleSizes extends Pick<FlowbiteSizes, 'sm'> {
  [key: string]: string;
}
//#endregion

/**
 * Required properties for the class generation of `SidebarToggleComponent`
 */
export interface SidebarToggleProperties {
  color: keyof SidebarColors;
  size: keyof SidebarToggleSizes;
  customStyle: DeepPartial<SidebarToggleTheme>;
}

/**
 * Theme definitions for `SidebarToggleComponent`
 */
export interface SidebarToggleTheme {
  root: {
    base: string;
    color: SidebarColors;
    size: SidebarToggleSizes;
  };
}

/**
 * Default theme for `SidebarToggleComponent`
 */
export const sidebarToggleTheme: SidebarToggleTheme = createTheme({
  root: {
    base: 'cursor-pointer inline-flex items-center p-2 justify-center rounded-lg focus:outline-none focus:ring-2',
    color: {
      primary:
        'text-primary-500 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-gray-700 focus:ring-primary-200 dark:focus:ring-primary-600',
      dark: 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-gray-200 dark:focus:ring-gray-600',
      blue: 'text-blue-500 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-700 focus:ring-blue-200 dark:focus:ring-blue-600',
      red: 'text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700 focus:ring-red-200 dark:focus:ring-red-600',
      green:
        'text-green-500 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-700 focus:ring-green-200 dark:focus:ring-green-600',
      yellow:
        'text-yellow-500 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-700 focus:ring-yellow-200 dark:focus:ring-yellow-600',
    },
    size: {
      sm: 'text-sm',
    },
  },
});

/**
 * Generated class definition for `SidebarToggleComponent`
 */
export type SidebarToggleClass = FlowbiteClass;
