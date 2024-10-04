import type { DeepPartial, FlowbiteBoolean, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface NavbarContentProperties {
  isOpen: keyof FlowbiteBoolean;
  customStyle: DeepPartial<NavbarContentTheme>;
}

export interface NavbarContentTheme {
  root: {
    base: string;
    isOpen: FlowbiteBoolean;
  };
  list: {
    base: string;
  };
}

export const navbarContentTheme: NavbarContentTheme = createTheme({
  root: {
    base: 'w-full md:block md:w-auto order-last md:order-none',
    isOpen: {
      enabled: '',
      disabled: 'hidden',
    },
  },
  list: {
    base: 'font-medium flex flex-col p-4 md:p-0 mt-4 items-center border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-800 dark:border-gray-700',
  },
});

export interface NavbarContentClass extends FlowbiteClass {
  navbarContentListClass: string;
}
