import {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbitePositions,
} from '../../common/flowbite.theme';

//#region Component theme option
export type DropdownPositions = Pick<
  FlowbitePositions,
  'bottom-center' | 'top-center'
> & {
  'left-center': string;
  'right-center': string;
};
//#endregion

export type DropdownProperties = {
  label: string;
  isOpen: keyof FlowbiteBoolean;
  placement: keyof DropdownPositions;
  customStyle: Partial<DropdownBaseTheme>;
};

export type DropdownBaseTheme = {
  root: Partial<DropdownRootTheme>;
  span: Partial<DropdownSpanTheme>;
  container: Partial<DropdownContainerTheme>;
  content: Partial<DropdownContentTheme>;
  subContent: Partial<DropdownSubContentTheme>;
};

export type DropdownRootTheme = {
  base: string;
};

export type DropdownSpanTheme = {
  base: string;
};

export type DropdownContainerTheme = {
  base: string;
  opened: Record<keyof FlowbiteBoolean, string>;
  placement: Record<keyof DropdownPositions, string>;
};

export type DropdownContentTheme = {
  base: string;
};

export type DropdownSubContentTheme = {
  base: string;
};

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

export type DropdownClass = FlowbiteClass & {
  dropdownClass: string;
  spanClass: string;
  containerClass: string;
  contentClass: string;
  subContentClass: string;
};

export const DropdownClassInstance: DropdownClass = {
  containerClass: '',
  contentClass: '',
  dropdownClass: '',
  rootClass: '',
  spanClass: '',
  subContentClass: '',
};
