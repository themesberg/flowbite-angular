import type { FlowbiteBoolean, FlowbiteColors } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteSidebarColors extends FlowbiteColors {}

export interface FlowbiteSidebarTheme {
  host: FlowbiteSidebarHostTheme;
}

export interface FlowbiteSidebarHostTheme {
  base: string;
  open: FlowbiteBoolean;
}

export const flowbiteSidebarTheme: FlowbiteSidebarTheme = createTheme({
  host: {
    base: 'fixed inset-0 top-0 left-0 z-40 h-screen lg:w-64',
    open: {
      on: 'w-full backdrop-blur-sm',
      off: 'w-0',
    },
  },
});
