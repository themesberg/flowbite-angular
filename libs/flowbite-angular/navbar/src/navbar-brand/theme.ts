import { createTheme } from 'flowbite-angular';

export interface FlowbiteNavbarBrandTheme {
  host: FlowbiteNavbarBrandHostTheme;
}

export interface FlowbiteNavbarBrandHostTheme {
  base: string;
}

export const flowbiteNavbarBrandTheme: FlowbiteNavbarBrandTheme = createTheme({
  host: {
    base: 'flex items-center space-x-3',
  },
});
