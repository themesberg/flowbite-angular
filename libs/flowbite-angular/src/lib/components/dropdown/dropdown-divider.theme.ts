import { FlowbiteClass } from '../../common';

export type DropdownDividerProperties = {
  customStyle: Partial<DropdownDividerBaseTheme>;
};

export type DropdownDividerBaseTheme = {
  root: Partial<DropdownDividerRootTheme>;
};

export type DropdownDividerRootTheme = {
  base: string;
};

export const dropdownDividerTheme: DropdownDividerBaseTheme = {
  root: {
    base: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
  },
};

export type DropdownDividerClass = FlowbiteClass;

export const DropdownDividerClassInstance: DropdownDividerClass = {
  rootClass: '',
};
