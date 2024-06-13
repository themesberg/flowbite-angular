import { mergeTheme } from '../../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export type IconDirectiveProperties = {
  customStyle: Partial<IconDirectiveBaseTheme>;
};

export type IconDirectiveBaseTheme = {
  root: Partial<IconDirectiveRootTheme>;
};

export type IconDirectiveRootTheme = {
  base: string;
};

export const iconDirectiveTheme: IconDirectiveBaseTheme = {
  root: {
    base: 'w-5 h-5 text-gray-500 dark:text-gray-400',
  },
};

export type IconDirectiveClass = {
  root: string;
};

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
