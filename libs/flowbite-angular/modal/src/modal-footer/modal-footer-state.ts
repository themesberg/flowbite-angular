import type { ModalFooter } from './modal-footer.directive';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalFooterStateToken = createStateToken<ModalFooter>('Flowbite ModalFooter');
export const provideFlowbiteModalFooterState = createStateProvider(FlowbiteModalFooterStateToken);
export const injectFlowbiteModalFooterState = createStateInjector(FlowbiteModalFooterStateToken);
export const flowbiteModalFooterState = createState(FlowbiteModalFooterStateToken);
