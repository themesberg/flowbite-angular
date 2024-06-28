import { DeepPartial, FlowbiteClass } from '../../common';
import { createTheme } from '../../utils/theme/create-theme';

export interface SidebarItemGroupProperties {
  customStyle: DeepPartial<SidebarItemGroupBaseTheme>;
}

export interface SidebarItemGroupBaseTheme {
  base: string;
}

export const sidebarItemGroupTheme: SidebarItemGroupBaseTheme = createTheme({
  base: 'flex flex-col py-2 font-semibold cursor-pointer',
});

export type SidebarItemGroupClass = FlowbiteClass;

export const SidebarItemGroupClassInstance: SidebarItemGroupClass = {
  rootClass: '',
};
