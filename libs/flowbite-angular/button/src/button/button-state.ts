import type { Button } from './button.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteButtonStateToken = createStateToken<Button>('Flowbite Button');
export const provideFlowbiteButtonState = createStateProvider(FlowbiteButtonStateToken);
export const injectFlowbiteButtonState = createStateInjector(FlowbiteButtonStateToken);
export const flowbiteButtonState = createState(FlowbiteButtonStateToken);
