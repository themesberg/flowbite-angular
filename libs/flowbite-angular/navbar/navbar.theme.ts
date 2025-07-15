import type { DeepPartial } from '../../common';
import type { FlowbiteColors } from '../../common/type-definitions/colors/flowbite.colors';
import type { FlowbiteBoolean } from '../../common/type-definitions/flowbite.boolean';
import type { FlowbiteClass } from '../../common/type-definitions/flowbite.class';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface NavbarColors extends Pick<FlowbiteColors, 'primary' | 'gray'> {
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
      primary: 'bg-primary-200 dark:bg-primary-800 border-primary-200 dark:border-primary-700',
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
      enabled: 'border-b',
      disabled: '',
    },
  },
});

export type NavbarClass = FlowbiteClass;
