import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

/**
 * Required properties for the class generation of `DropdownDividerComponent`
 */
export interface DropdownDividerProperties {
  customStyle: DeepPartial<DropdownDividerTheme>;
}

/**
 * Theme definition for `DropdownDividerComponent`
 */
export interface DropdownDividerTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme for `DropdownDividerComponent`
 */
export const dropdownDividerTheme: DropdownDividerTheme = createTheme({
  root: {
    base: 'block my-1 h-px bg-gray-100 dark:bg-gray-600',
  },
});

/**
 * Generated class definition for `DropdownDividerComponent`
 */
export type DropdownDividerClass = FlowbiteClass;
