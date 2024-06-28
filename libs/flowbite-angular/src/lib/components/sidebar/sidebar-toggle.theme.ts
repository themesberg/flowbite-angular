import {
  DeepPartial,
  FlowbiteClass,
  FlowbiteColors,
  FlowbiteSizes,
} from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

//#region region Component theme option
export interface SidebarToggleColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

export interface SidebarToggleSizes extends Pick<FlowbiteSizes, 'sm'> {
  [key: string]: string;
}
//#endregion

export interface SidebarToggleProperties {
  color: keyof SidebarToggleColors;
  size: keyof SidebarToggleSizes;
  customStyle: DeepPartial<SidebarToggleBaseTheme>;
}

export interface SidebarToggleBaseTheme {
  base: string;
  color: SidebarToggleColors;
  size: SidebarToggleSizes;
}

export const sidebarToggleTheme: SidebarToggleBaseTheme = createTheme({
  base: 'cursor-pointer inline-flex items-center p-2 justify-center rounded-lg focus:outline-none focus:ring-2',
  color: {
    gray: 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
  },
  size: {
    sm: 'text-sm',
  },
});

export type SidebarToggleClass = FlowbiteClass;

export const SidebarToggleClassInstance: SidebarToggleClass = {
  rootClass: '',
};
