import { FlowbiteClass } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

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

export function getClasses(
  properties: DropdownDividerProperties,
): DropdownDividerClass {
  const theme: DropdownDividerBaseTheme = mergeTheme(
    dropdownDividerTheme,
    properties.customStyle,
  );

  const output: DropdownDividerClass = {
    rootClass: twMerge(theme.root.base),
  };

  return output;
}
