import { mergeTheme } from '../../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface IconDirectiveProperties {
  customStyle: Partial<IconDirectiveBaseTheme>;
}

export interface IconDirectiveBaseTheme {
  root: Partial<IconDirectiveRootTheme>;
}

export interface IconDirectiveRootTheme {
  base: string;
}

export const iconDirectiveTheme: IconDirectiveBaseTheme = {
  root: {
    base: 'w-5 h-5 text-gray-500 dark:text-gray-400',
  },
};

export interface IconDirectiveClass {
  root: string;
}

export function getClasses(
  properties: IconDirectiveProperties,
): IconDirectiveClass {
  const theme: IconDirectiveBaseTheme = mergeTheme(
    iconDirectiveTheme,
    properties.customStyle,
  );

  const output: IconDirectiveClass = {
    root: twMerge(theme.root.base),
  };

  return output;
}
