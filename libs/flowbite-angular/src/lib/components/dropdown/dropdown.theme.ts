import {
  FlowbiteBoolean,
  FlowbitePositions,
} from '../../common/flowbite.theme';
import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface DropdownProperties {
  label: string;
  isOpen: keyof FlowbiteBoolean;
  placement: keyof DropdownPositions;
  customStyle: Partial<DropdownBaseTheme>;
}

export interface DropdownBaseTheme {
  root: Partial<DropdownRootTheme>;
  span: Partial<DropdownSpanTheme>;
  container: Partial<DropdownContainerTheme>;
  content: Partial<DropdownContentTheme>;
  subContent: Partial<DropdownSubContentTheme>;
}

export interface DropdownRootTheme {
  base: string;
}

export interface DropdownSpanTheme {
  base: string;
}

export interface DropdownContainerTheme {
  base: string;
  opened: Record<keyof FlowbiteBoolean, string>;
  placement: Record<keyof DropdownPositions, string>;
}

export interface DropdownContentTheme {
  base: string;
}

export interface DropdownSubContentTheme {
  base: string;
}

export interface DropdownPositions
  extends Pick<FlowbitePositions, 'bottom-center' | 'top-center'> {
  'left-center': string;
  'right-center': string;
}

export const dropdownTheme: DropdownBaseTheme = {
  root: {
    base: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg',
  },
  span: {
    base: 'flex items-center rounded-md text-sm px-4 py-2',
  },
  container: {
    base: 'z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 min-w-fit absolute',
    opened: {
      enabled: 'block',
      disabled: 'hidden',
    },
    placement: {
      'top-center': '',
      'bottom-center': '',
      'left-center': '',
      'right-center': '',
    },
  },
  content: {
    base: 'py-1 text-sm text-gray-700 dark:text-gray-200',
  },
  subContent: {
    base: 'py-1',
  },
};

export interface DropdownClass {
  dropdownClass: string;
  spanClass: string;
  containerClass: string;
  contentClass: string;
  subContentClass: string;
}

export function getClasses(properties: DropdownProperties): DropdownClass {
  const theme: DropdownBaseTheme = mergeTheme(
    dropdownTheme,
    properties.customStyle,
  );

  const output: DropdownClass = {
    dropdownClass: twMerge(theme.root.base),
    spanClass: twMerge(theme.span.base),
    containerClass: twMerge(
      theme.container.base,
      theme.container.opened![properties.isOpen],
      theme.container.placement![properties.placement],
    ),
    contentClass: twMerge(theme.content.base),
    subContentClass: twMerge(theme.subContent.base),
  };

  return output;
}
