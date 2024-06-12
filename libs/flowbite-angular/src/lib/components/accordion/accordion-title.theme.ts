import { FlowbiteBoolean, FlowbiteClass } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';
import { twMerge } from 'tailwind-merge';

export interface AccordionTitleProperties {
  isOpen: keyof FlowbiteBoolean;
  isFlush: keyof FlowbiteBoolean;
  customStyle: Partial<AccordionTitleBaseTheme>;
}

export interface AccordionTitleBaseTheme {
  root: Partial<AccordionTitleRootTheme>;
}

export interface AccordionTitleRootTheme {
  base: string;
  isFlushToIsOpen: Record<
    keyof FlowbiteBoolean,
    Record<keyof FlowbiteBoolean, string>
  >;
}

export const accordionTitleTheme: AccordionTitleBaseTheme = {
  root: {
    base: 'cursor-pointer flex w-full items-center justify-between py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
    isFlushToIsOpen: {
      enabled: {
        enabled: 'text-gray-900 dark:text-white',
        disabled: '',
      },
      disabled: {
        enabled:
          'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800',
        disabled:
          'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
      },
    },
  },
};

export type AccordionTitleClass = FlowbiteClass;

export const AccordionTitleClassInstance: AccordionTitleClass = {
  rootClass: '',
};

export function getClass(
  properties: AccordionTitleProperties,
): AccordionTitleClass {
  const theme: AccordionTitleBaseTheme = mergeTheme(
    accordionTitleTheme,
    properties.customStyle,
  );

  const output: AccordionTitleClass = {
    rootClass: twMerge(
      theme.root.base,
      theme.root.isFlushToIsOpen?.[properties.isFlush][properties.isOpen],
    ),
  };

  return output;
}
