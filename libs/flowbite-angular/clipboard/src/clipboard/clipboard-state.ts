import type { FlowbiteClipboard } from './clipboard.component';

import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteClipboardStateToken =
  createStateToken<FlowbiteClipboard>('Flowbite Clipboard');
export const provideFlowbiteClipboardState = createStateProvider(FlowbiteClipboardStateToken);
export const injectFlowbiteClipboardState = createStateInjector(FlowbiteClipboardStateToken);
export const flowbiteClipboardState = createState(FlowbiteClipboardStateToken);
