import {
  flowbiteBaseButtonTheme,
  type FlowbiteBaseButtonHostTheme,
  type FlowbiteBaseButtonTheme,
} from '../base-button/theme';

import { createTheme } from 'flowbite-angular';

export interface FlowbiteIconButtonTheme extends FlowbiteBaseButtonTheme {}

export interface FlowbiteIconButtonHostTheme extends FlowbiteBaseButtonHostTheme {}

export const flowbiteIconButtonTheme: FlowbiteIconButtonTheme = createTheme({
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
