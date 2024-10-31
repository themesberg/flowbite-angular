import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `DropdownHeaderComponent`
 */
export interface DropdownHeaderProperties {
  customStyle: DeepPartial<DropdownHeaderTheme>;
}

/**
 * Theme definition of `DropdownHeaderComponent`
 */
export interface DropdownHeaderTheme {
  root: {
    base: string;
  };
  content: {
    base: string;
  };
}

/**
 * Default theme for `DropdownHeaderComponent`
 */
export const dropdownHeaderTheme: DropdownHeaderTheme = createTheme({
  root: {
    base: '',
  },
  content: {
    base: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
  },
});

/**
 * Generated class definition for `DropdownHeaderComponent`
 */
export interface DropdownHeaderClass extends FlowbiteClass {
  root: string;
}
