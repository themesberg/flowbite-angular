import {
  flowbiteAccordionItemTheme,
  type FlowbiteAccordionItemTheme,
} from '../accordion-item/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteAccordionItemConfig {
  /**
   * The default theme of accordion item.
   */
  baseTheme: FlowbiteAccordionItemTheme;
  /**
   * The custom theme of accordion item.
   */
  customTheme: DeepPartial<FlowbiteAccordionItemTheme>;
}

export const defaultFlowbiteAccordionItemConfig: FlowbiteAccordionItemConfig = {
  baseTheme: flowbiteAccordionItemTheme,
  customTheme: {},
};

export const FlowbiteAccordionItemConfigToken = new InjectionToken<FlowbiteAccordionItemConfig>(
  'FlowbiteAccordionItemConfig'
);

/**
 * Provide the default Accordion Item configuration
 * @param config The Accordion Item configuration
 * @returns The provider
 */
export const provideFlowbiteAccordionItemConfig = (
  config: Partial<FlowbiteAccordionItemConfig>
): Provider[] => [
  {
    provide: FlowbiteAccordionItemConfigToken,
    useValue: { ...defaultFlowbiteAccordionItemConfig, ...config },
  },
];

/**
 * Inject the Accordion Item configuration
 * @see {@link defaultFlowbiteAccordionItemConfig}
 * @returns The configuration
 */
export const injectFlowbiteAccordionItemConfig = (): FlowbiteAccordionItemConfig =>
  inject(FlowbiteAccordionItemConfigToken, { optional: true }) ??
  defaultFlowbiteAccordionItemConfig;
