import type {
  DeepPartial,
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbitePositions,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region Component theme option
/**
 * Available positions for `DropdownComponent`
 */
export interface DropdownPositions extends Pick<FlowbitePositions, 'bottom-center' | 'top-center'> {
  'left-center': string;
  'right-center': string;
}
//#endregion

/**
 * Required properties for the class generation of `DropdownComponent`
 */
export interface DropdownProperties {
  label: string;
  isOpen: keyof FlowbiteBoolean;
  placement: keyof DropdownPositions;
  customStyle: DeepPartial<DropdownTheme>;
}

/**
 * Theme definition for `DropdownComponent`
 */
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

/**
 * Default theme for `DropdownComponent`
 */
export const dropdownTheme: DropdownTheme = createTheme({
  root: {
    base: 'relative inline w-fit',
  },
  dropdown: {
    base: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg',
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
      'top-center': 'bottom-full mb-2.5 left-1/2 -translate-x-1/2',
      'bottom-center': 'top-full mt-2.5 left-1/2 -translate-x-1/2',
      'left-center': 'left-full ml-2.5 top-1/2 -translate-y-1/2',
      'right-center': 'right-full mr-2.5 top-1/2 -translate-y-1/2',
    },
  },
  content: {
    base: 'py-1 text-sm text-gray-700 dark:text-gray-200 shadow-md',
  },
  subContent: {
    base: 'py-1',
  },
});

/**
 * Generated class definition for `DropdownComponent`
 */
export interface DropdownClass extends FlowbiteClass {
  dropdownClass: string;
  spanClass: string;
  containerClass: string;
  contentClass: string;
  subContentClass: string;
}
