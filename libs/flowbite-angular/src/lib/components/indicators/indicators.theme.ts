import type { DeepPartial } from '../../common';
import type {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteColors,
  FlowbitePositions,
  FlowbiteSizes,
} from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface IndicatorColors
  extends Pick<
    FlowbiteColors,
    'primary' | 'dark' | 'gray' | 'blue' | 'green' | 'red' | 'purple' | 'indigo' | 'yellow' | 'teal'
  > {
  [key: string]: string;
}

export interface IndicatorSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface IndicatorPositions
  extends Pick<
    FlowbitePositions,
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
  > {
  [key: string]: string;
}
//#endregion

export interface IndicatorProperties {
  isPill: keyof FlowbiteBoolean;
  isOutline: keyof FlowbiteBoolean;
  isDisabled: keyof FlowbiteBoolean;
  hasOffset: keyof FlowbiteBoolean;
  isRounded: keyof FlowbiteBoolean;
  hasBorder: keyof FlowbiteBoolean;
  color: keyof IndicatorColors;
  size: keyof IndicatorSizes;
  placement?: keyof IndicatorPositions;
  customStyle: DeepPartial<IndicatorTheme>;
}

export interface IndicatorTheme {
  root: {
    base: string;
    isPill: FlowbiteBoolean;
    isOutline: FlowbiteBoolean;
    isDisabled: FlowbiteBoolean;
    hasOffset: IndicatorPositions;
    isRounded: FlowbiteBoolean;
    hasBorder: FlowbiteBoolean;
    color: IndicatorColors;
    size: IndicatorSizes;
    placement: IndicatorPositions;
  };
}

export const indicatorTheme: IndicatorTheme = createTheme({
  root: {
    base: 'inline-flex items-center justify-center shrink-0 font-bold',
    hasBorder: {
      enabled: 'border-2',
      disabled: '',
    },
    color: {
      dark: 'bg-gray-900 dark:bg-gray-700 border-white dark:border-gray-800 text-white',
      primary: 'bg-primary-500 border-white dark:border-gray-800 text-white',
      gray: 'bg-gray-200 border-white dark:border-gray-800 text-gray-900',
      blue: 'bg-blue-600 border-white dark:border-gray-800 text-white',
      green: 'bg-green-500 border-white dark:border-gray-800 text-white',
      red: 'bg-red-500 border-white dark:border-gray-800 text-white',
      purple: 'bg-purple-500 border-white dark:border-gray-800 text-white',
      indigo: 'bg-indigo-500 border-white dark:border-gray-800 text-white',
      yellow: 'bg-yellow-300 border-white dark:border-gray-800 text-gray-900',
      teal: 'bg-teal-500 border-white dark:border-gray-800 text-white',
    },
    isDisabled: {
      enabled: 'opacity-50',
      disabled: '',
    },
    hasOffset: {
      'top-left': '-translate-x-1/3 -translate-y-1/3',
      'top-center': '-translate-y-1/3',
      'top-right': 'translate-x-1/3 -translate-y-1/3',
      'center-left': '-translate-x-1/3',
      center: '',
      'center-right': 'translate-x-1/3',
      'bottom-left': '-translate-x-1/3 translate-y-1/3',
      'bottom-center': 'translate-y-1/3',
      'bottom-right': 'translate-x-1/3 translate-y-1/3',
    },
    placement: {
      'top-left': 'top-0 left-0',
      'top-center': 'top-0 left-1/2 -translate-x-1/2',
      'top-right': 'top-0 right-0',
      'center-left': 'top-1/2 -translate-y-1/2 left-0',
      center: 'top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
      'center-right': 'top-1/2 -translate-y-1/2 right-0',
      'bottom-left': 'bottom-0 left-0',
      'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
      'bottom-right': 'bottom-0 right-0',
    },
    isOutline: {
      enabled: '',
      disabled: '',
    },
    isPill: {
      enabled: '',
      disabled: '',
    },
    isRounded: {
      enabled: 'rounded',
      disabled: 'rounded-full',
    },
    size: {
      xs: 'w-2 h-2 text-xs',
      sm: 'w-2.5 h-2.5 text-sm',
      md: 'w-3 h-3 text-sm',
      lg: 'w-3.5 h-3.5 text-sm',
      xl: 'w-6 h-6 text-sm',
    },
  },
});

export type indicatorClass = FlowbiteClass;
