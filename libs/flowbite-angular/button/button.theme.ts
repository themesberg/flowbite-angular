import type { FlowbiteColors } from '../../common/type-definitions/colors/flowbite.colors';
import type { FlowbiteGradientColors } from '../../common/type-definitions/colors/flowbite.gradient-colors';
import type { FlowbiteGradientDuoToneColors } from '../../common/type-definitions/colors/flowbite.gradient-duo-tone-colors';
import type { FlowbiteBoolean } from '../../common/type-definitions/flowbite.boolean';
import type { FlowbiteClass } from '../../common/type-definitions/flowbite.class';
import type { Combination } from '../../common/type-definitions/flowbite.combination';
import type { DeepPartial } from '../../common/type-definitions/flowbite.deep-partial';
import type { FlowbiteSizes } from '../../common/type-definitions/flowbite.sizes';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface ButtonColors
  extends Pick<
    FlowbiteColors,
    'dark' | 'primary' | 'light' | 'blue' | 'red' | 'green' | 'yellow' | 'purple'
  > {
  [key: string]: string;
}

export interface ButtonMonochromeColors
  extends Pick<
    FlowbiteGradientColors,
    'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple'
  > {
  [key: string]: string;
}

export type ButtonDuoToneColors = Pick<
  FlowbiteGradientDuoToneColors,
  | 'purpleToBlue'
  | 'cyanToBlue'
  | 'greenToBlue'
  | 'purpleToPink'
  | 'pinkToOrange'
  | 'tealToLime'
  | 'redToYellow'
>;

export interface ButtonSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface ButtonFill {
  solid: string;
  outline: string;
}

export interface ButtonTypes {
  default: string;
  span: string;
}
//#endregion

export interface ButtonProperties {
  color: keyof ButtonColors;
  gradientMonochrome?: keyof ButtonMonochromeColors;
  gradientDuoTone?: keyof ButtonDuoToneColors;
  size: keyof ButtonSizes;
  isPill: keyof FlowbiteBoolean;
  fill: keyof ButtonFill;
  isDisabled: keyof FlowbiteBoolean;
  customStyle: DeepPartial<ButtonTheme>;
}

export interface ButtonTheme {
  root: {
    base: ButtonTypes;
    color: Combination<keyof ButtonColors, keyof ButtonFill, string>;
    gradientMonochrome: ButtonMonochromeColors;
    gradientDuoTone: Combination<keyof ButtonDuoToneColors, keyof ButtonFill, string>;
    size: ButtonSizes;
    isPill: FlowbiteBoolean;
    isDisabled: FlowbiteBoolean;
  };
  span: {
    base: string;
    isPill: FlowbiteBoolean;
    size: ButtonSizes;
  };
}

export const buttonTheme: ButtonTheme = createTheme({
  root: {
    base: {
      default:
        'cursor-pointer group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10',
      span: 'cursor-pointer group inline-flex relative items-center justify-center p-0.5 font-medium overflow-hidden',
    },
    color: {
      dark: {
        solid:
          'text-white bg-gray-800 dark:bg-gray-800 border border-transparent dark:border-gray-700 hover:bg-gray-900 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 disabled:hover:bg-gray-800 dark:disabled:hover:bg-gray-800',
        outline:
          'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:hover:bg-gray-600 dark:focus:ring-gray-800',
      },
      primary: {
        solid:
          'text-white bg-primary-700 border border-transparent hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-900',
        outline:
          'text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600 dark:focus:ring-primary-900',
      },
      red: {
        solid:
          'text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
        outline:
          'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
      },
      blue: {
        solid:
          'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        outline:
          'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800',
      },
      light: {
        solid:
          'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700',
        outline:
          'text-gray-900 bg-transparent border border-gray-200 hover:bg-white focus:ring-4 focus:ring-blue-300 dark:bg-transparent dark:text-white dark:border-white dark:hover:text-gray-900 dark:hover:bg-white dark:hover:border-gray-700 dark:focus:ring-gray-700',
      },
      purple: {
        solid:
          'text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
        outline:
          'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900',
      },
      green: {
        solid:
          'text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
        outline:
          'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
      },
      yellow: {
        solid:
          'text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900',
        outline:
          'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
      },
    },
    isDisabled: {
      enabled: 'cursor-not-allowed opacity-50',
      disabled: '',
    },
    gradientMonochrome: {
      cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
      red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
      blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800',
      lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',
      pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
      purple:
        'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
      green:
        'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
      teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800',
    },
    gradientDuoTone: {
      purpleToBlue: {
        solid:
          'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
        outline:
          'text-gray-900 bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
      },
      cyanToBlue: {
        solid:
          'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800',
        outline:
          'text-gray-900 bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800',
      },
      greenToBlue: {
        solid:
          'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
        outline:
          'text-gray-900 bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
      },
      purpleToPink: {
        solid:
          'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
        outline:
          'text-gray-900 bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
      },
      pinkToOrange: {
        solid:
          'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
        outline:
          'text-gray-900 bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
      },
      tealToLime: {
        solid:
          'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700',
        outline:
          'text-gray-900 bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800',
      },
      redToYellow: {
        solid:
          'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
        outline:
          'text-gray-900 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
      },
    },
    size: {
      xs: 'text-xs py-2 px-3',
      sm: 'text-sm py-2 px-3',
      md: 'text-sm px-5 py-2.5',
      lg: 'text-base py-3 px-5',
      xl: 'text-base px-6 py-3.5',
    },
    isPill: {
      enabled: 'rounded-full',
      disabled: 'rounded-lg',
    },
  },
  span: {
    base: 'cursor-pointer relative inline-flex items-center bg-white transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900',
    isPill: {
      enabled: 'rounded-full',
      disabled: 'rounded-md',
    },
    size: {
      xs: 'text-xs py-2 px-3',
      sm: 'text-sm py-2 px-3',
      md: 'text-sm px-5 py-2.5',
      lg: 'text-base py-3 px-5',
      xl: 'text-base px-6 py-3.5',
    },
  },
});

export interface ButtonClass extends FlowbiteClass {
  spanClass: string;
}
