import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface DarkThemeToggleProperties {
  customStyle: DeepPartial<DarkThemeToggleTheme>;
}

export interface DarkThemeToggleTheme {
  root: {
    base: string;
  };
}
export const darkThemeToggleTheme: DarkThemeToggleTheme = createTheme({
  root: {
    base: 'cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
  },
});

export type DarkThemeToggleClass = FlowbiteClass;
