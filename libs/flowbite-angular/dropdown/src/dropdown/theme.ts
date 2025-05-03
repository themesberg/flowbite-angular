import { createTheme } from 'flowbite-angular';

export interface FlowbiteDropdownTheme {
  host: FlowbiteDropdownHostTheme;
  list: FlowbiteDropdownListTheme;
}

export interface FlowbiteDropdownHostTheme {
  base: string;
}

export interface FlowbiteDropdownListTheme {
  base: string;
}

export const flowbiteDropdownTheme: FlowbiteDropdownTheme = createTheme({
  host: {
    base: 'fixed z-10 w-max divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:bg-gray-700',
  },
  list: {
    base: 'py-2 text-sm text-gray-700 dark:text-gray-200',
  },
});
