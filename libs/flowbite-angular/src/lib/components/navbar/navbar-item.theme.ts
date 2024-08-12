import type { DeepPartial } from '../../common';
import type { FlowbiteClass, FlowbiteColors } from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface NavbarItemColors extends Pick<FlowbiteColors, 'blue'> {
  [key: string]: string;
}
//#endregion

export interface NabvarItemProperties {
  color: keyof NavbarItemColors;
  customStyle: DeepPartial<NavbarItemTheme>;
}

export interface NavbarItemTheme {
  root: {
    base: string;
    color: NavbarItemColors;
  };
}

export const navbarItemTheme: NavbarItemTheme = createTheme({
  root: {
    base: 'cursor-pointer block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
    color: {
      blue: 'md:hover:text-blue-700 md:dark:hover:text-blue-500',
    },
  },
});

export type NavbarItemClass = FlowbiteClass;
