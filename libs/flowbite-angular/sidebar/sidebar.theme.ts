import type { DeepPartial, FlowbiteBoolean, FlowbiteClass, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

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
