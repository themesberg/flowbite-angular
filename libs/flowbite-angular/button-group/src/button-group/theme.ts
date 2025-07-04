import { createTheme } from 'flowbite-angular';

export interface FlowbiteButtonGroupTheme {
  host: FlowbiteButtonGroupHostTheme;
}

export interface FlowbiteButtonGroupHostTheme {
  base: string;
  transition: string;
}

export const flowbiteButtonGroupTheme: FlowbiteButtonGroupTheme = createTheme({
  host: {
    base: 'flex flex-row rounded-lg shadow-xs *:rounded-none *:first:rounded-l-lg *:last:rounded-r-lg',
    transition: '',
  },
});
