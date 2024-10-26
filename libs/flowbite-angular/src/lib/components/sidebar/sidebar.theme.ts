import type { DeepPartial } from '../../common';
import type { FlowbiteColors } from '../../common/type-definitions/colors/flowbite.colors';
import type { FlowbiteBoolean } from '../../common/type-definitions/flowbite.boolean';
import type { FlowbiteClass } from '../../common/type-definitions/flowbite.class';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
export interface SidebarColors
  extends Pick<FlowbiteColors, 'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow'> {
  [key: string]: string;
}

export interface SidebarDisplayMode {
  push: string;
  over: string;
  backdrop: string;
}
//endregion

export interface SidebarProperties {
  displayMode: keyof SidebarDisplayMode;
  isRounded: keyof FlowbiteBoolean;
  customStyle: DeepPartial<SidebarTheme>;
}

export interface SidebarTheme {
  root: {
    base: string;
    isRounded: FlowbiteBoolean;
  };
}

export const sidebarTheme: SidebarTheme = createTheme({
  root: {
    base: 'flex flex-row min-h-full',
    isRounded: {
      enabled: 'rounded',
      disabled: '',
    },
  },
});

export type SidebarClass = FlowbiteClass;
