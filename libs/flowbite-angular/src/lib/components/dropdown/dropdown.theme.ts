import type { DeepPartial } from '../../common';
import type { FlowbiteBoolean, FlowbiteClass, FlowbitePositions } from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface DropdownPositions extends Pick<FlowbitePositions, 'bottom-center' | 'top-center'> {
  'left-center': string;
  'right-center': string;
}
//#endregion

export interface DropdownProperties {
  label: string;
  isOpen: keyof FlowbiteBoolean;
  placement: keyof DropdownPositions;
  customStyle: DeepPartial<DropdownTheme>;
}

export interface DropdownTheme {
  root: {
    base: string;
  };
  dropdown: {
    base: string;
  };
  span: {
    base: string;
  };
  container: {
    base: string;
    isOpen: FlowbiteBoolean;
    placement: DropdownPositions;
  };
  content: {
    base: string;
  };
  subContent: {
    base: string;
  };
}

export const dropdownTheme: DropdownTheme = createTheme({
  root: {
    base: '',
  },
  dropdown: {
    base: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg',
  },
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
    base: 'py-1 text-sm text-gray-700 dark:text-gray-200 shadow-md',
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
