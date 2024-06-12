import { FlowbiteClass } from '../../common';
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
    base: 'block py-5 px-5 dark:bg-gray-900',
  },
};

export type AccordionContentClass = FlowbiteClass;

export function AccordionContentClassInstance(): AccordionContentClass {
  return { rootClass: '' };
}

export function getClasses(
  properties: AccordionContentProperties,
): AccordionContentClass {
  const theme: AccordionContentBaseTheme = mergeTheme(
    accordionContentTheme,
    properties.customStyle,
  );

  const output: AccordionContentClass = {
    rootClass: twMerge(theme.root.base),
  };

  return output;
}
