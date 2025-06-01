import type { FlowbiteIconComponent } from './icon.component';

import { inject, InjectionToken } from '@angular/core';
import {
  createState,
  createStateInjector,
  createStateProvider,
  createStateToken,
} from 'ng-primitives/state';

export const FlowbiteIconStateToken = createStateToken<FlowbiteIconComponent>('Flowbite Icon');
export const provideFlowbiteIconState = createStateProvider(FlowbiteIconStateToken);
export const injectFlowbiteIconState = createStateInjector(FlowbiteIconStateToken);
export const flowbiteIconState = createState(FlowbiteIconStateToken);

/* https://github.com/ng-icons/ng-icons/blob/main/packages/core/src/lib/providers/features/csp.ts */
export type NgIconPreProcessor = (icon: string) => string;
export type NgIconPostProcessor = (element: HTMLElement | SVGElement) => void;

export const NgIconPreProcessorToken = new InjectionToken<NgIconPreProcessor>(
  'Ng Icon Pre Processor'
);

export const NgIconPostProcessorToken = new InjectionToken<NgIconPostProcessor>(
  'Ng Icon Post Processor'
);

export function injectNgIconPreProcessor(): NgIconPreProcessor {
  return inject(NgIconPreProcessorToken, { optional: true }) ?? ((icon) => icon);
}

export function injectNgIconPostProcessor(): NgIconPostProcessor {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return inject(NgIconPostProcessorToken, { optional: true }) ?? (() => {});
}
