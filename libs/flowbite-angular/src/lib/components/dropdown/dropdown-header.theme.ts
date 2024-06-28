import type { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface DropdownHeaderProperties {
  customStyle: DeepPartial<DropdownHeaderBaseTheme>;
}

export interface DropdownHeaderBaseTheme {
  base: string;
}

export const dropdownHeaderTheme: DropdownHeaderBaseTheme = createTheme({
  base: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
});

export interface DropdownHeaderClass extends FlowbiteClass {
  root: string;
}

export const DropdownHeaderClassInstance: DropdownHeaderClass = {
  root: '',
  rootClass: '',
};
