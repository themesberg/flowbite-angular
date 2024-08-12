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
    blue: 'border-info-200 dark:border-info-700',
    red: 'border-failure-200 dar:border-failure-700',
    green: 'border-success-200 dark:border-success-700',
    yellow: 'border-warning-200 dark:border-warning-700',
  },
  isFlush: {
    enabled: '',
    disabled: 'border',
  },
});

export type AccordionClass = FlowbiteClass;
