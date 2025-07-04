import {
  flowbiteAccordionContentTheme,
  type FlowbiteAccordionContentTheme,
} from '../accordion-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteAccordionContentConfig {
  /**
   * The default theme of AccordionContent
   */
  baseTheme: FlowbiteAccordionContentTheme;

  /**
   * The custom theme of AccordionContent
   */
  customTheme: DeepPartial<FlowbiteAccordionContentTheme>;
}

export const defaultFlowbiteAccordionContentConfig: FlowbiteAccordionContentConfig = {
  baseTheme: flowbiteAccordionContentTheme,
  customTheme: {},
};

export const FlowbiteAccordionContentConfigToken =
  new InjectionToken<FlowbiteAccordionContentConfig>('FlowbiteAccordionContentConfigToken');

/**
 * Provide the default AccordionContent configuration
 * @param config The AccordionContent configuration
 * @returns The provider
 */
export const provideFlowbiteAccordionContentConfig = (
  config: Partial<FlowbiteAccordionContentConfig>
): Provider[] => [
  {
    provide: FlowbiteAccordionContentConfigToken,
    useValue: { ...defaultFlowbiteAccordionContentConfig, ...config },
  },
];

/**
 * Inject the AccordionContent configuration
 * @see {@link defaultFlowbiteAccordionContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteAccordionContentConfig = (): FlowbiteAccordionContentConfig =>
  inject(FlowbiteAccordionContentConfigToken, { optional: true }) ??
  defaultFlowbiteAccordionContentConfig;
