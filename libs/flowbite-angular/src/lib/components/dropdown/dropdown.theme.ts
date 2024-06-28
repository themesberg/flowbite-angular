import { DeepPartial } from '../../common';
import {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbitePositions,
} from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface DropdownPositions
  extends Pick<FlowbitePositions, 'bottom-center' | 'top-center'> {
  'left-center': string;
  'right-center': string;
}
//#endregion

export interface DropdownProperties {
  label: string;
  isOpen: keyof FlowbiteBoolean;
  placement: keyof DropdownPositions;
  customStyle: Partial<DropdownBaseTheme>;
}

export interface DropdownBaseTheme {
  base: string;
  span: DeepPartial<DropdownSpanTheme>;
  container: DeepPartial<DropdownContainerTheme>;
  content: DeepPartial<DropdownContentTheme>;
  subContent: DeepPartial<DropdownSubContentTheme>;
}

export interface DropdownSpanTheme {
  base: string;
}

export interface DropdownContainerTheme {
  base: string;
  isOpen: FlowbiteBoolean;
  placement: DropdownPositions;
}

export interface DropdownContentTheme {
  base: string;
}

export interface DropdownSubContentTheme {
  base: string;
}

export const dropdownTheme: DropdownBaseTheme = createTheme({
  base: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg',
  span: {
    base: 'flex items-center rounded-md text-sm px-4 py-2',
  },
  container: {
    base: 'z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 min-w-fit absolute',
    isOpen: {
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
});

export interface DropdownClass extends FlowbiteClass {
  dropdownClass: string;
  spanClass: string;
  containerClass: string;
  contentClass: string;
  subContentClass: string;
}

export const DropdownClassInstance: DropdownClass = {
  containerClass: '',
  contentClass: '',
  dropdownClass: '',
  rootClass: '',
  spanClass: '',
  subContentClass: '',
};
