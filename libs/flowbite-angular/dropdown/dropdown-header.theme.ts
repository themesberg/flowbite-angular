import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

export interface DropdownHeaderProperties {
  customStyle: DeepPartial<DropdownHeaderTheme>;
}

export interface DropdownHeaderTheme {
  root: {
    base: string;
  };
  content: {
    base: string;
  };
}

export const dropdownHeaderTheme: DropdownHeaderTheme = createTheme({
  root: {
    base: '',
  },
  content: {
    base: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
  },
});

export interface DropdownHeaderClass extends FlowbiteClass {
  root: string;
}
