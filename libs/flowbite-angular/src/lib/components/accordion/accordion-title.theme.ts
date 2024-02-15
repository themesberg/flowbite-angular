import { mergeTheme } from '../../utils/merge-theme';
import { twMerge } from 'tailwind-merge';

export interface AccordionTitleProperties {
  customStyle: Partial<AccordionTitleBaseTheme>;
}

export interface AccordionTitleBaseTheme {
  root: Partial<AccordionTitleRootTheme>;
}

export interface AccordionTitleRootTheme {
  base: string;
}

export const accordionTitleTheme: AccordionTitleBaseTheme = {
  root: {
    base: 'flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
  },
};

export function getClass(properties: AccordionTitleProperties): string {
  const theme: AccordionTitleBaseTheme = mergeTheme(
    accordionTitleTheme,
    properties.customStyle,
  );

  const output = twMerge(theme.root.base);

  return output;
}
