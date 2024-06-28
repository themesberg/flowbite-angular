import type { DeepPartial } from '../../common';
import type { FlowbiteBoolean, FlowbiteClass, FlowbiteColors } from '../../common/flowbite.theme';
import { createClass } from '../../utils/theme/create-class';
import { createTheme } from '../../utils/theme/create-theme';

//#region region Component theme option
export interface AccordionColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}
//#endregion

export interface AccordionProperties {
  isFlush: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AccordionBaseTheme>;
}

export interface AccordionBaseTheme {
  base: string;
  isFlush: FlowbiteBoolean;
}

export const accordionTheme: AccordionBaseTheme = createTheme({
  base: 'divide-y overflow-hidden',
  isFlush: {
    enabled: 'border-b',
    disabled: 'rounded-lg border',
  },
});

export type AccordionClass = FlowbiteClass;

export const AccordionClassInstance = createClass<AccordionClass>({
  rootClass: '',
});
