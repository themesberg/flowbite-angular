import type { FlowbiteThemeToggleComponent } from './theme-toggle.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteThemeToggleStateToken =
  createStateToken<FlowbiteThemeToggleComponent>('Flowbite ThemeToggle');
export const provideFlowbiteThemeToggleState = createStateProvider(FlowbiteThemeToggleStateToken);
export const injectFlowbiteThemeToggleState = createStateInjector(FlowbiteThemeToggleStateToken);
export const flowbiteThemeToggleState = createState(FlowbiteThemeToggleStateToken);
