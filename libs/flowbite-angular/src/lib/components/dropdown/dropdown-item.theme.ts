import { FlowbiteClass } from '../../common';

export type DropdownItemProperties = {
  customStyle: Partial<DropdownItemBaseTheme>;
};

export type DropdownItemBaseTheme = {
  root: Partial<DropdownItemRootTheme>;
};

export type DropdownItemRootTheme = {
  base: string;
};

export const dropdownItemTheme: DropdownItemBaseTheme = {
  root: {
    base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white',
  },
};

export type DropdownItemClass = FlowbiteClass;

export const DropdownItemClassInstance: DropdownItemClass = {
  rootClass: '',
};
