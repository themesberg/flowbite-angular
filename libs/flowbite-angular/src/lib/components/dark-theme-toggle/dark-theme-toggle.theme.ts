import { FlowbiteClass } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';
import { twMerge } from 'tailwind-merge';

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

export function DarkThemeToggleClassInstance(): DarkThemeToggleClass {
  return { rootClass: '' };
}

export function getClasses(
  properties: DarkThemeToggleProperties,
): DarkThemeToggleClass {
  const theme: DarkThemeToggleBaseTheme = mergeTheme(
    darkThemeToggleTheme,
    properties.customStyle,
  );

  const output: DarkThemeToggleClass = {
    rootClass: twMerge(theme.button.base),
  };

  return output;
}
