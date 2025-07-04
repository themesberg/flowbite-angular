import type { ModalContent } from './modal-content.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalContentStateToken =
  createStateToken<ModalContent>('Flowbite ModalContent');
export const provideFlowbiteModalContentState = createStateProvider(FlowbiteModalContentStateToken);
export const injectFlowbiteModalContentState = createStateInjector(FlowbiteModalContentStateToken);
export const flowbiteModalContentState = createState(FlowbiteModalContentStateToken);
