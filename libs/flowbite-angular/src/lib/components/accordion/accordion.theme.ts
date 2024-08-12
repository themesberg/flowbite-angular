import type { DeepPartial } from '../../common';
import type { FlowbiteBoolean, FlowbiteClass, FlowbiteColors } from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region region Component theme option
export interface AccordionColors extends Pick<FlowbiteColors, 'primary' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}
//#endregion

export interface AccordionProperties {
  color: keyof AccordionColors;
  isFlush: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AccordionBaseTheme>;
}

export interface AccordionBaseTheme {
  base: string;
  color: AccordionColors;
  isFlush: FlowbiteBoolean;
}

export const accordionTheme: AccordionBaseTheme = createTheme({
  base: 'shadow-sm',
  color: {
    primary: 'border-primary-200 dark:border-primary-700',
    blue: 'border-blue-200 dark:border-blue-700',
    red: 'border-red-200 dar:border-red-700',
    green: 'border-green-200 dark:border-green-700',
    yellow: 'border-yellow-200 dark:border-yellow-700',
  },
  isFlush: {
    enabled: '',
    disabled: 'border',
  },
});

export type AccordionClass = FlowbiteClass;
