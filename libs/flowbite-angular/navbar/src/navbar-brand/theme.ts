import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarBrandTheme {
  host: FlowbiteNavbarBrandHostTheme;
}

export interface FlowbiteNavbarBrandHostTheme {
  base: string;
  transition: string;
}

export const flowbiteNavbarBrandTheme: FlowbiteNavbarBrandTheme = createTheme({
  host: {
    base: 'flex cursor-pointer items-center space-x-3',
    transition: '',
  },
});
