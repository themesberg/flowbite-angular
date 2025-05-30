import { createTheme } from 'flowbite-angular';
import {
  flowbiteBaseButtonTheme,
  type FlowbiteBaseButtonHostTheme,
  type FlowbiteBaseButtonTheme,
} from 'flowbite-angular/button';

export interface FlowbiteThemeToggleTheme extends FlowbiteBaseButtonTheme {
  host: FlowbiteThemeToggleHostTheme;
}

export interface FlowbiteThemeToggleHostTheme extends FlowbiteBaseButtonHostTheme {
  base: string;
}

export const flowbiteThemeToggleTheme: FlowbiteThemeToggleTheme = createTheme({
  host: {
    base: flowbiteBaseButtonTheme.host.base,
    transition: flowbiteBaseButtonTheme.host.transition,
    focus: flowbiteBaseButtonTheme.host.focus,
    disabled: flowbiteBaseButtonTheme.host.disabled,
    size: flowbiteBaseButtonTheme.host.size,
    pill: flowbiteBaseButtonTheme.host.pill,
    color: flowbiteBaseButtonTheme.host.color,
    colorOutline: flowbiteBaseButtonTheme.host.colorOutline,
  },
});
