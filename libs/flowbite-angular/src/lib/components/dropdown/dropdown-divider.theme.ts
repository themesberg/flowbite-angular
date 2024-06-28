import { FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface DropdownDividerProperties {
  customStyle: Partial<DropdownDividerBaseTheme>;
}

export interface DropdownDividerBaseTheme {
  base: string;
}

export const dropdownDividerTheme: DropdownDividerBaseTheme = createTheme({
  base: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
});

export type DropdownDividerClass = FlowbiteClass;

export const DropdownDividerClassInstance: DropdownDividerClass = {
  rootClass: '',
};
