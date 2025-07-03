import type { Theme } from './theme.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteThemeStateToken = createStateToken<Theme>('Flowbite Theme');
export const provideFlowbiteThemeState = createStateProvider(FlowbiteThemeStateToken);
export const injectFlowbiteThemeState = createStateInjector(FlowbiteThemeStateToken);
export const flowbiteThemeState = createState(FlowbiteThemeStateToken);
