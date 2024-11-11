import type { DeepPartial, FlowbiteClass } from 'flowbite-angular';

/**
 * Required properties for the cmass generation of `DropdownItemComponent`
 */
export interface DropdownItemProperties {
  customStyle: DeepPartial<DropdownItemTheme>;
}

/**
 * Theme definition for `DropdownItemComponent`
 */
export interface DropdownItemTheme {
  root: {
    base: string;
  };
}

/**
 * Default theme value for `DropdownItemComponent`
 */
export const dropdownItemTheme: DropdownItemTheme = {
  root: {
    base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white',
  },
};

/**
 * Generated class definition for `DropdownItemComponent`
 */
export type DropdownItemClass = FlowbiteClass;
