import type { FlowbiteBoolean, FlowbiteClass } from '../../common';
import type { DeepPartial, RouterLinkParameter } from '../../common/flowbite.type';
import { createTheme } from '../../utils/theme/create-theme';

export interface SidebarItemProperties {
  icon: string | undefined;
  isActive: keyof FlowbiteBoolean;
  link?: RouterLinkParameter;
  label: string | undefined;
  customStyle: DeepPartial<SidebarItemTheme>;
}

export interface SidebarItemTheme {
  root: {
    base: string;
    isActive: FlowbiteBoolean;
  };
  icon: {
    base: string;
  };
}

export const sidebarItemTheme: SidebarItemTheme = createTheme({
  root: {
    base: 'group flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700',
    isActive: {
      enabled: '',
      disabled: '',
    },
  },
  icon: {
    base: 'flex-1 whitespace-nowrap',
  },
});

export interface SidebarItemClass extends FlowbiteClass {
  sidebarIconClass: string;
}
