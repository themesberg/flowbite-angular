import type { DeepPartial } from '../../common';
import type { FlowbiteBoolean, FlowbiteClass, FlowbiteColors } from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region region Component theme option
export interface AccordionColors
  extends Pick<FlowbiteColors, 'primary' | 'light' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}
//#endregion

export interface AccordionProperties {
  color: keyof AccordionColors;
  isFlush: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AccordionTheme>;
}

export interface AccordionTheme {
  root: {
    base: string;
    color: AccordionColors;
    isFlush: FlowbiteBoolean;
  };
}

export const accordionTheme: AccordionTheme = createTheme({
  root: {
    base: 'shadow-sm divide-y',
    color: {
      primary: 'border-primary-200 dark:border-primary-700 divide-primary-200 dark:divide-primary-700',
      light: 'border-gray-300 dark:border-gray-700 divide-primary-200 dark:divide-primary-700',
      blue: 'border-blue-200 dark:border-blue-700 divide-primary-200 dark:divide-primary-700',
      red: 'border-red-200 dar:border-red-700 divide-primary-200 dark:divide-primary-700',
      green: 'border-green-200 dark:border-green-700 divide-primary-200 dark:divide-primary-700',
      yellow: 'border-yellow-200 dark:border-yellow-700 divide-primary-200 dark:divide-primary-700',
    },
    isFlush: {
      enabled: 'border-b',
      disabled: 'rounded-lg border',
    },
  },
});

export type AccordionClass = FlowbiteClass;
