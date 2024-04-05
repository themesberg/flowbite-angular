import { mergeTheme } from '../../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface AddonDirectiveProperties {
  customStyle: Partial<AddonDirectiveBaseTheme>;
}

export interface AddonDirectiveBaseTheme {
  root: Partial<AddonDirectiveRootTheme>;
}

export interface AddonDirectiveRootTheme {
  base: string;
}

export const addonDirectiveTheme: AddonDirectiveBaseTheme = {
  root: {
    base: 'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600',
  },
};

export interface AddonDirectiveClass {
  root: string;
}

export function getClasses(
  properties: AddonDirectiveProperties,
): AddonDirectiveClass {
  const theme: AddonDirectiveBaseTheme = mergeTheme(
    addonDirectiveTheme,
    properties.customStyle,
  );

  const output: AddonDirectiveClass = {
    root: twMerge(theme.root.base),
  };

  return output;
}
