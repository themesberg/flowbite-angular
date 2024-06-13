import { FlowbiteClass } from '../../common';

export interface DarkThemeToggleProperties {
  customStyle: Partial<DarkThemeToggleBaseTheme>;
}

export interface DarkThemeToggleBaseTheme {
  button: Partial<DarkThemeToggleButtonTheme>;
}

export interface DarkThemeToggleButtonTheme {
  base: string;
}

export const darkThemeToggleTheme: DarkThemeToggleBaseTheme = {
  button: {
    base: 'cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
  },
};

export type DarkThemeToggleClass = FlowbiteClass;

export const DarkThemeToggleClassInstance: DarkThemeToggleClass = {
  rootClass: '',
};
