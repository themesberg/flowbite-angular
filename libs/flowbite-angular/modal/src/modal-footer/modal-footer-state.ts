import type { FlowbiteModalFooter } from './modal-footer.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteModalFooterStateToken =
  createStateToken<FlowbiteModalFooter>('Flowbite ModalFooter');
export const provideFlowbiteModalFooterState = createStateProvider(FlowbiteModalFooterStateToken);
export const injectFlowbiteModalFooterState = createStateInjector(FlowbiteModalFooterStateToken);
export const flowbiteModalFooterState = createState(FlowbiteModalFooterStateToken);
