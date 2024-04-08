import {
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbitePositions,
  FlowbiteSizes,
} from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface IndicatorProperties {
  pill: keyof FlowbiteBoolean;
  outline: keyof FlowbiteBoolean;
  disabled: keyof FlowbiteBoolean;
  offset: keyof FlowbiteBoolean;
  rounded: keyof FlowbiteBoolean;
  border: keyof FlowbiteBoolean;
  color: keyof IndicatorColors;
  size: keyof FlowbiteSizes;
  placement?: keyof FlowbitePositions;
  customStyle: Partial<IndicatorBaseTheme>;
}

export interface IndicatorBaseTheme {
  root: Partial<IndicatorRootTheme>;
}

export interface IndicatorRootTheme {
  base: string;
  pill: Record<keyof FlowbiteBoolean, string>;
  outline: Record<keyof FlowbiteBoolean, string>;
  disabled: Record<keyof FlowbiteBoolean, string>;
  offset: Record<keyof FlowbitePositions, string>;
  rounded: Record<keyof FlowbiteBoolean, string>;
  border: Record<keyof FlowbiteBoolean, string>;
  color: Record<keyof IndicatorColors, string>;
  size: Record<keyof FlowbiteSizes, string>;
  placement: Record<keyof FlowbitePositions, string>;
}

export interface IndicatorColors
  extends Pick<
    FlowbiteColors,
    | 'gray'
    | 'dark'
    | 'blue'
    | 'green'
    | 'red'
    | 'purple'
    | 'indigo'
    | 'yellow'
    | 'teal'
    | 'gray'
  > {
  [key: string]: string;
}

export const indicatorTheme: IndicatorBaseTheme = {
  root: {
    base: 'flex-shrink-0',
    border: {
      enabled: 'border-2 border-white dark:border-gray-800',
      disabled: '',
    },
    color: {
      gray: 'bg-gray-200',
      dark: 'bg-gray-900 dark:bg-gray-700',
      blue: 'bg-blue-600',
      green: 'bg-green-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500',
      indigo: 'bg-indigo-500',
      yellow: 'bg-yellow-300',
      teal: 'bg-teal-500',
    },
    disabled: {
      enabled: '',
      disabled: '',
    },
    offset: {
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
    outline: {
      enabled: '',
      disabled: '',
    },
    pill: {
      enabled: '',
      disabled: '',
    },
    rounded: {
      enabled: 'rounded',
      disabled: 'rounded-full',
    },
    size: {
      xs: 'w-2 h-2',
      sm: 'w-2.5 h-2.5',
      md: 'w-3 h-3',
      lg: 'w-3.5 h-3.5',
      xl: 'w-6 h-6',
    },
  },
};

export interface indicatorClass {
  root: string;
}

export function getClasses(properties: IndicatorProperties): indicatorClass {
  const theme: IndicatorBaseTheme = mergeTheme(
    indicatorTheme,
    properties.customStyle,
  );

  const output: indicatorClass = {
    root: twMerge(
      theme.root.base,
      theme.root.border![properties.border],
      theme.root.color![properties.color],
      theme.root.disabled![properties.disabled],
      properties.placement &&
        properties.offset == 'enabled' &&
        theme.root.offset![properties.placement],
      theme.root.outline![properties.outline],
      theme.root.pill![properties.pill],
      properties.placement &&
        'absolute ' + theme.root.placement![properties.placement],
      theme.root.rounded![properties.rounded],
      theme.root.size![properties.size],
    ),
  };

  return output;
}
