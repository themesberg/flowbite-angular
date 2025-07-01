import { createTheme } from 'flowbite-angular';

export interface FlowbiteClipboardTheme {
  host: FlowbiteClipboardHostTheme;
}

export interface FlowbiteClipboardHostTheme {
  base: string;
  transition: string;
}

export const flowbiteClipboardTheme: FlowbiteClipboardTheme = createTheme({
  host: {
    base: 'w-full max-w-[16rem]',
    transition: '',
  },
});
