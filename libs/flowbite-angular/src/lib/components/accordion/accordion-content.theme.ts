import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface AccordionContentProperties {
  customStyle: Partial<AccordionContentBaseTheme>;
}

export interface AccordionContentBaseTheme {
  root: Partial<AccordionContentRootTheme>;
}

export interface AccordionContentRootTheme {
  base: string;
}

export const accordionContentTheme: AccordionContentBaseTheme = {
  root: {
    base: 'py-5 px-5 dark:bg-gray-900',
  },
};

export function getClasses(properties: AccordionContentProperties): string {
  const theme: AccordionContentBaseTheme = mergeTheme(
    accordionContentTheme,
    properties.customStyle,
  );

  const output = twMerge(theme.root.base);

  return output;
}
