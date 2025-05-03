import { createTheme } from 'flowbite-angular';

export interface FlowbiteDropdownItemTheme {
  host: FlowbiteDropdownItemHostTheme;
}

export interface FlowbiteDropdownItemHostTheme {
  base: string;
  transition: string;
}

export const flowbiteDropdownItemTheme: FlowbiteDropdownItemTheme = createTheme({
  host: {
    base: 'block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
    transition: 'transition-colors duration-150 ease-in-out',
  },
});
