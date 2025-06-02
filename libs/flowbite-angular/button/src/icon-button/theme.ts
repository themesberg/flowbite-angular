import type { FlowbiteBaseButtonSizes } from '../base-button/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteIconButtonTheme {
  host: FlowbiteIconButtonHostTheme;
}

export interface FlowbiteIconButtonHostTheme {
  base: string;
  size: FlowbiteBaseButtonSizes;
}

export const flowbiteIconButtonTheme: FlowbiteIconButtonTheme = createTheme({
  host: {
    base: 'only:m-0',
    size: {
      xs: 'h-2.5 w-2.5 first:mr-2.5 last:ml-2.5',
      sm: 'h-3 w-3 first:mr-3 last:ml-3',
      md: 'h-4 w-4 first:mr-4 last:ml-4',
      lg: 'h-5 w-5 first:mr-5 last:ml-5',
      xl: 'h-6 w-6 first:mr-6 last:ml-6',
    },
  },
});
