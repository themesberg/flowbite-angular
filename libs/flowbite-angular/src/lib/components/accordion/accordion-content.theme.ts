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
    base: 'py-5 px-5 dark:bg-gray-900',
  },
};

export interface AccordionContentClass extends FlowbiteClass {
  root: string;
}

export function AccordionContentClassInstance(): AccordionContentClass {
  return { root: '', rootClass: '' };
}

export function getClasses(
  properties: AccordionContentProperties,
): AccordionContentClass {
  const theme: AccordionContentBaseTheme = mergeTheme(
    accordionContentTheme,
    properties.customStyle,
  );

  const output: AccordionContentClass = {
    rootClass: '',
    root: twMerge(theme.root.base),
  };

  return output;
}
