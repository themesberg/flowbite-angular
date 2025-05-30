import { createTheme } from 'flowbite-angular';

export interface FlowbiteButtonGroupTheme {
  host: FlowbiteButtonGroupHostTheme;
}

export interface FlowbiteButtonGroupHostTheme {
  base: string;
}

export const flowbiteButtonGroupTheme: FlowbiteButtonGroupTheme = createTheme({
  host: {
    base: 'inline-flex rounded-lg shadow-xs *:rounded-none *:first:rounded-l-lg *:last:rounded-r-lg',
  },
});
