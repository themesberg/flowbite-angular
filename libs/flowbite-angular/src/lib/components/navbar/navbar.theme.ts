import type { DeepPartial } from '../../common';
import type { FlowbiteBoolean, FlowbiteClass, FlowbiteColors } from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface NavbarColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}
//#endregion

export interface NavbarProperties {
  isRounded: keyof FlowbiteBoolean;
  hasBorder: keyof FlowbiteBoolean;
  isFixed: keyof FlowbiteBoolean;
  customStyle: DeepPartial<NavbarTheme>;
}

export interface NavbarTheme {
  root: {
    base: string;
    color: NavbarColors;
    isRounded: FlowbiteBoolean;
    hasBorder: FlowbiteBoolean;
    isFixed: FlowbiteBoolean;
  };
}

export const navbarTheme: NavbarTheme = createTheme({
  root: {
    base: 'flex flex-wrap items-center justify-between p-4',
    color: {
      gray: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
    },
    isRounded: {
      enabled: 'rounded',
      disabled: '',
    },
    hasBorder: {
      enabled: 'border',
      disabled: '',
    },
    isFixed: {
      enabled: 'sticky w-full z-40 top-0 start-0 border-b',
      disabled: '',
    },
  },
});

export type NavbarClass = FlowbiteClass;
