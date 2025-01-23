import type { DeepPartial, FlowbiteBoolean, FlowbiteClass, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region Component theme option
export interface SidebarColors
  extends Pick<FlowbiteColors, 'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}

export interface SidebarDisplayMode {
  push: string;
  over: string;
  backdrop: string;
}
//endregion

export interface SidebarProperties {
  isOpen: keyof FlowbiteBoolean;
  color: keyof SidebarColors;
  displayMode: keyof SidebarDisplayMode;
  isRounded: keyof FlowbiteBoolean;
  customStyle: DeepPartial<SidebarTheme>;
}

export interface SidebarTheme {
  root: {
    base: string;
    isRounded: FlowbiteBoolean;
    displayMode: SidebarDisplayMode;
    isOpen: FlowbiteBoolean;
    color: SidebarColors;
  };
  container: {
    base: string;
  };
  list: {
    base: string;
  };
}

export const sidebarTheme: SidebarTheme = createTheme({
  root: {
    base: 'top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0',
    isRounded: {
      enabled: 'rounded',
      disabled: '',
    },
    displayMode: {
      push: '',
      over: 'sticky top-0',
      backdrop: 'sticky top-0',
    },
    isOpen: {
      enabled: '',
      disabled: 'hidden',
    },
    color: {
      primary: 'border-primary-200 dark:border-primary-700',
      dark: 'border-gray-200 dark:border-gray-800',
      blue: 'border-blue-200 dark:border-blue-700',
      red: 'border-red-200 dark:border-red-700',
      green: 'border-green-200 dark:border-green-700',
      yellow: 'border-yellow-200 dark:border-yellow-700',
    },
  },
  container: {
    base: 'h-full px-3 py-4 overflow-y-auto',
  },
  list: {
    base: 'space-y-2 font-medium',
  },
});

export interface SidebarClass extends FlowbiteClass {
  containerClass: string;
  listClass: string;
}
