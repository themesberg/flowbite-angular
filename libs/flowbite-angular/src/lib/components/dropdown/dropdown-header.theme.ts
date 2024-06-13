import { FlowbiteClass } from '../../common';

export interface DropdownHeaderProperties {
  customStyle: Partial<DropdownHeaderBaseTheme>;
}

export interface DropdownHeaderBaseTheme {
  root: Partial<DropdownHeaderRootTheme>;
}

export interface DropdownHeaderRootTheme {
  base: string;
}

export const dropdownHeaderTheme: DropdownHeaderBaseTheme = {
  root: {
    base: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
  },
};

export interface DropdownHeaderClass extends FlowbiteClass {
  root: string;
}

export const DropdownHeaderClassInstance: DropdownHeaderClass = {
  root: '',
  rootClass: '',
};
