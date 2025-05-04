import {
  flowbiteBaseButtonTheme,
  type FlowbiteBaseButtonHostTheme,
  type FlowbiteBaseButtonTheme,
} from '../base-button/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteButtonTheme extends FlowbiteBaseButtonTheme {}

export interface FlowbiteButtonHostTheme extends FlowbiteBaseButtonHostTheme {}

export const flowbiteButtonTheme: FlowbiteButtonTheme = createTheme({
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
