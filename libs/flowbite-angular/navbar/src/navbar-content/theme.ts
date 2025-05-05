import type { FlowbiteBoolean } from 'flowbite-angular';
import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarContentTheme {
  host: FlowbiteNavbarContentHostTheme;
  container: FlowbiteNavbarContentContainerTheme;
}

export interface FlowbiteNavbarContentHostTheme {
  base: string;
  fixed: FlowbiteBoolean;
  open: FlowbiteBoolean;
}

export interface FlowbiteNavbarContentContainerTheme {
  base: string;
}

export const flowbiteNavbarContentTheme: FlowbiteNavbarContentTheme = createTheme({
  host: {
    base: 'w-full overflow-hidden md:flex md:w-auto',
    fixed: {
      on: '',
      off: '',
    },
    open: {
      on: '',
      off: 'hidden',
    },
  },
  container: {
    base: 'mt-4 flex flex-col rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-4 md:border-0 md:p-0',
  },
});
