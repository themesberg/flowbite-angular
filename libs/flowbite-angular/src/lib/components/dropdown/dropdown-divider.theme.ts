import { FlowbiteClass } from '../../common';

export interface DropdownDividerProperties {
  customStyle: Partial<DropdownDividerBaseTheme>;
}

export interface DropdownDividerBaseTheme {
  root: Partial<DropdownDividerRootTheme>;
}

export interface DropdownDividerRootTheme {
  base: string;
}

export const dropdownDividerTheme: DropdownDividerBaseTheme = {
  root: {
    base: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
  },
};

export type DropdownDividerClass = FlowbiteClass;

export const DropdownDividerClassInstance: DropdownDividerClass = {
  rootClass: '',
};
