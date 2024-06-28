import { DeepPartial } from '../../common';
import { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

export interface SidebarProperties {
  isOpen: keyof FlowbiteBoolean;
  isRounded: keyof FlowbiteBoolean;
  customStyle: DeepPartial<SidebarBaseTheme>;
}

export interface SidebarBaseTheme {
  base: string;
  isRounded: FlowbiteBoolean;
  isOpen: FlowbiteBoolean;
}

export const sidebarTheme: SidebarBaseTheme = createTheme({
  base: 'flex h-full flex-col space-y-4 divide-y divide-gray-200 overflow-y-auto bg-white py-4 px-3 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800',
  isRounded: {
    enabled: 'rounded',
    disabled: '',
  },
  isOpen: {
    enabled: 'hidden',
    disabled: 'flex flex-col',
  },
});

export type SidebarClass = FlowbiteClass;

export const SidebarClassInstance: SidebarClass = {
  rootClass: '',
};
