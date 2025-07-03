import type { Modal } from './modal.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalStateToken = createStateToken<Modal>('Flowbite Modal');
export const provideFlowbiteModalState = createStateProvider(FlowbiteModalStateToken);
export const injectFlowbiteModalState = createStateInjector(FlowbiteModalStateToken);
export const flowbiteModalState = createState(FlowbiteModalStateToken);
