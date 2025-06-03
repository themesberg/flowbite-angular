import type { FlowbiteModal } from './modal.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalStateToken = createStateToken<FlowbiteModal>('Flowbite Modal');
export const provideFlowbiteModalState = createStateProvider(FlowbiteModalStateToken);
export const injectFlowbiteModalState = createStateInjector(FlowbiteModalStateToken);
export const flowbiteModalState = createState(FlowbiteModalStateToken);
