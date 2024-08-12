import type { DeepPartial } from '../../common';
import type { FlowbiteBoolean, FlowbiteClass } from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

export interface SidebarProperties {
  isOpen: keyof FlowbiteBoolean;
  isRounded: keyof FlowbiteBoolean;
  customStyle: DeepPartial<SidebarTheme>;
}

export interface SidebarTheme {
  root: {
    base: string;
    isRounded: FlowbiteBoolean;
    isOpen: FlowbiteBoolean;
  };
}

export const sidebarTheme: SidebarTheme = createTheme({
  root: {
    base: 'shrink-0 flex h-full flex-col space-y-4 divide-y divide-gray-200 overflow-y-auto bg-white py-4 px-3 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800',
    isRounded: {
      enabled: 'rounded',
      disabled: '',
    },
    isOpen: {
      enabled: 'hidden',
      disabled: 'flex flex-col',
    },
  },
});

export type SidebarClass = FlowbiteClass;
