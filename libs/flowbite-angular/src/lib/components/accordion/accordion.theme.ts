import type { DeepPartial } from '../../common';
import type { FlowbiteColors } from '../../common/type-definitions/colors/flowbite.colors';
import type { FlowbiteBoolean } from '../../common/type-definitions/flowbite.boolean';
import type { FlowbiteClass } from '../../common/type-definitions/flowbite.class';
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
    base: '',
    color: {
      primary: 'border-primary-200 dark:border-primary-700 divide-primary-200 dark:divide-primary-700',
      light: 'border-gray-300 dark:border-gray-700 divide-gray-200 dark:divide-gray-700',
      blue: 'border-blue-200 dark:border-blue-700 divide-blue-200 dark:divide-blue-700',
      red: 'border-red-200 dark:border-red-700 divide-red-200 dark:divide-red-700',
      green: 'border-green-200 dark:border-green-700 divide-green-200 dark:divide-green-700',
      yellow: 'border-yellow-200 dark:border-yellow-700 divide-yellow-200 dark:divide-yellow-700',
    },
    isFlush: {
      enabled: '',
      disabled: 'rounded-lg border shadow-sm',
    },
  },
});

export type AccordionClass = FlowbiteClass;
