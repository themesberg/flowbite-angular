import type { FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface DropdownDividerProperties {
  customStyle: Partial<DropdownDividerTheme>;
}

export interface DropdownDividerTheme {
  root: {
    base: string;
  };
}

export const dropdownDividerTheme: DropdownDividerTheme = createTheme({
  root: {
    base: 'block my-1 h-px bg-gray-100 dark:bg-gray-600',
  },
});

export type DropdownDividerClass = FlowbiteClass;
