import { FlowbiteClass } from '../../common';

export type DropdownHeaderProperties = {
  customStyle: Partial<DropdownHeaderBaseTheme>;
};

export type DropdownHeaderBaseTheme = {
  root: Partial<DropdownHeaderRootTheme>;
};

export type DropdownHeaderRootTheme = {
  base: string;
};

export const dropdownHeaderTheme: DropdownHeaderBaseTheme = {
  root: {
    base: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
  },
};

export type DropdownHeaderClass = FlowbiteClass & {
  root: string;
};

export const DropdownHeaderClassInstance: DropdownHeaderClass = {
  root: '',
  rootClass: '',
};
