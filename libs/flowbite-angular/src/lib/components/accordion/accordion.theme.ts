import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface AccordionProperties {
  flush: keyof FlowbiteBoolean;
  customStyle: Partial<AccordionBaseTheme>;
}

export interface AccordionBaseTheme {
  root: Partial<AccordionRootTheme>;
}

export interface AccordionRootTheme {
  base: string;
  flush: Record<keyof FlowbiteBoolean, string>;
}

export const accordionTheme: AccordionBaseTheme = {
  root: {
    base: 'divide-y divide-gray-200 overflow-hidden border-gray-200 dark:divide-gray-700 dark:border-gray-700',
    flush: {
      enabled: 'border-b',
      disabled: 'rounded-lg border',
    },
  },
};

export interface AccordionClass {
  root: string;
}

export function getClasses(properties: AccordionProperties): AccordionClass {
  const theme: AccordionBaseTheme = mergeTheme(
    accordionTheme,
    properties.customStyle,
  );

  const output: AccordionClass = {
    root: twMerge(theme.root.base, theme.root.flush![properties.flush]),
  };

  return output;
}
