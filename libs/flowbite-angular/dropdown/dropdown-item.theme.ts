import type { DeepPartial, FlowbiteClass } from '../../common';

export interface DropdownItemProperties {
  customStyle: DeepPartial<DropdownItemTheme>;
}

export interface DropdownItemTheme {
  root: {
    base: string;
  };
}

export const dropdownItemTheme: DropdownItemTheme = {
  root: {
    base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white',
  },
};

export type DropdownItemClass = FlowbiteClass;
