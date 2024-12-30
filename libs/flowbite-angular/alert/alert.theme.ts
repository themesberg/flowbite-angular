import type {
  DeepPartial,
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteStandardColors,
  StandardThemeInput,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region Component theme option
/**
 * Available colors for `AlertComponent`
 */
export type AlertColors = Pick<
  FlowbiteStandardColors,
  'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow'
>;
//#endregion

/**
 * Required properties for the class generation of `AlertComponent`
 */
export interface AlertProperties {
  color: keyof AlertColors;
  hasBorder: keyof FlowbiteBoolean;
  hasBorderAccent: keyof FlowbiteBoolean;
  customStyle: DeepPartial<AlertTheme>;
  standardThemeConfig: StandardThemeInput;
}

/**
 * Theme definition for `AlertComponent`
 */
export interface AlertTheme {
  root: {
    base: string;
    color: AlertColors;
    hasBorder: FlowbiteBoolean;
    hasBorderAccent: FlowbiteBoolean;
  };
  closeButton: {
    base: string;
    color: AlertColors;
  };
}

/**
 * Default theme for `AlertComponent`
 */
export const alertTheme: AlertTheme = createTheme({
  root: {
    base: 'flex flex-col gap-2 p-4 text-sm rounded-lg',
    color: {
      primary: {
        base: {
          light: 'text-primary-800 bg-primary-50 border-primary-300',
          dark: 'dark:text-primary-400 dark:bg-gray-800 dark:border-primary-800',
        },
      },
      dark: {
        base: {
          light: 'text-gray-800 bg-gray-100 border-gray-300',
          dark: 'dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600',
        },
      },
      blue: {
        base: {
          light: 'text-blue-800 bg-blue-50 border-blue-300',
          dark: 'dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800',
        },
      },
      red: {
        base: {
          light: 'text-red-800 bg-red-100 border-red-300',
          dark: 'dark:text-red-400 dark:bg-gray-800 dark:border-red-800',
        },
      },
      green: {
        base: {
          light: 'text-green-800 bg-green-100 border-green-300',
          dark: 'dark:text-green-400 dark:bg-gray-800 dark:border-green-800',
        },
      },
      yellow: {
        base: {
          light: 'text-yellow-800 bg-yellow-100  border-yellow-300',
          dark: 'dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800',
        },
      },
    },
    hasBorder: {
      enabled: 'border',
      disabled: 'border-0',
    },
    hasBorderAccent: {
      enabled: 'border-t-4',
      disabled: '',
    },
  },
  closeButton: {
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
    color: {
      primary: {
        base: {
          light: 'text-primary-500',
          dark: 'dark:text-primary-600',
        },
        hover: {
          light: 'hover:bg-primary-200',
          dark: 'hover:dark:bg-primary-300',
        },
      },
      dark: {
        base: {
          light: 'text-gray-500',
          dark: 'dark:text-gray-600',
        },
        hover: {
          light: 'hover:bg-gray-200',
          dark: 'hover:dark:bg-gray-300',
        },
      },
      blue: {
        base: {
          light: 'text-blue-500',
          dark: 'dark:text-blue-600',
        },
        hover: {
          light: 'hover:bg-blue-200',
          dark: 'hover:dark:bg-blue-300',
        },
      },
      red: {
        base: {
          light: 'text-red-500',
          dark: 'dark:text-red-600',
        },
        hover: {
          light: 'hover:bg-red-200',
          dark: 'hover:dark:bg-red-300',
        },
      },
      green: {
        base: {
          light: 'text-green-500',
          dark: 'dark:text-green-600',
        },
        hover: {
          light: 'hover:bg-green-200',
          dark: 'hover:dark:bg-green-300',
        },
      },
      yellow: {
        base: {
          light: 'text-yellow-500',
          dark: 'dark:text-yellow-600',
        },
        hover: {
          light: 'hover:bg-yellow-200',
          dark: 'hover:dark:bg-yellow-300',
        },
      },
    },
  },
});

/**
 * Generated class definition for `AlertComponent`
 */
export interface AlertClass extends FlowbiteClass {
  closeButtonClass: string;
}
