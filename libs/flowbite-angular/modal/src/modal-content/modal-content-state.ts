import type { FlowbiteModalContentComponent } from './modal-content.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalContentStateToken =
  createStateToken<FlowbiteModalContentComponent>('Flowbite ModalContent');
export const provideFlowbiteModalContentState = createStateProvider(FlowbiteModalContentStateToken);
export const injectFlowbiteModalContentState = createStateInjector(FlowbiteModalContentStateToken);
export const flowbiteModalContentState = createState(FlowbiteModalContentStateToken);
