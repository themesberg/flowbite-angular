import { createTheme } from 'flowbite-angular';

export interface FlowbiteModalContentTheme {
  host: FlowbiteModalContentHostTheme;
}

export interface FlowbiteModalContentHostTheme {
  base: string;
}

export const flowbiteModalContentTheme: FlowbiteModalContentTheme = createTheme({
  host: {
    base: 'block space-y-6 p-6',
  },
});
