import { createTheme } from 'flowbite-angular';

export interface FlowbiteIconButtonTheme {
  host: FlowbiteIconButtonHostTheme;
}

export interface FlowbiteIconButtonHostTheme {
  base: string;
}

export const flowbiteIconButtonTheme: FlowbiteIconButtonTheme = createTheme({
  host: {
    base: 'first:mr-2 last:ml-2',
  },
});
