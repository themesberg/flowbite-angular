import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `DarkThemeToggleComponent`
 */
export interface DarkThemeToggleProperties {
  customStyle: DeepPartial<DarkThemeToggleTheme>;
}

/**
 * Theme definition for `DarkThemeToggleComponent`
 */
export interface DarkThemeToggleTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme for `DarkThemeToggleComponent`
 */
export const darkThemeToggleTheme: DarkThemeToggleTheme = createTheme({
  root: {
    base: 'cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
  },
});

/**
 * Generated class definition for `DarkThemeToggleComponent`
 */
export type DarkThemeToggleClass = FlowbiteClass;
