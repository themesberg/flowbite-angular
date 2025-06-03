import type { FlowbiteThemeToggle } from './theme-toggle.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteThemeToggleStateToken =
  createStateToken<FlowbiteThemeToggle>('Flowbite ThemeToggle');
export const provideFlowbiteThemeToggleState = createStateProvider(FlowbiteThemeToggleStateToken);
export const injectFlowbiteThemeToggleState = createStateInjector(FlowbiteThemeToggleStateToken);
export const flowbiteThemeToggleState = createState(FlowbiteThemeToggleStateToken);
