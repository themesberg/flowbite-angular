import type { FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface DropdownDividerProperties {
  customStyle: Partial<DropdownDividerTheme>;
}

export interface DropdownDividerTheme {
  root: {
    base: string;
  };
}

export const dropdownDividerTheme: DropdownDividerTheme = createTheme({
  root: {
    base: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
  },
});

export type DropdownDividerClass = FlowbiteClass;
