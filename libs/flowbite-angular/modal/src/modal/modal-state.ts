import type { FlowbiteModalComponent } from './modal.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalStateToken = createStateToken<FlowbiteModalComponent>('Flowbite Modal');
export const provideFlowbiteModalState = createStateProvider(FlowbiteModalStateToken);
export const injectFlowbiteModalState = createStateInjector(FlowbiteModalStateToken);
export const flowbiteModalState = createState(FlowbiteModalStateToken);
