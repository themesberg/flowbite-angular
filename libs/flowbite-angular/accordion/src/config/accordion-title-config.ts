import {
  flowbiteAccordionTitleTheme,
  type FlowbiteAccordionTitleTheme,
} from '../accordion-title/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteAccordionTitleConfig {
  /**
   * The default theme of AccordionTitle
   */
  baseTheme: FlowbiteAccordionTitleTheme;

  /**
   * The custom theme of AccordionTitle
   */
  customTheme: DeepPartial<FlowbiteAccordionTitleTheme>;
}

export const defaultFlowbiteAccordionTitleConfig: FlowbiteAccordionTitleConfig = {
  baseTheme: flowbiteAccordionTitleTheme,
  customTheme: {},
};

export const FlowbiteAccordionTitleConfigToken = new InjectionToken<FlowbiteAccordionTitleConfig>(
  'FlowbiteAccordionTitleConfigToken'
);

/**
 * Provide the default AccordionTitle configuration
 * @param config The AccordionTitle configuration
 * @returns The provider
 */
export const provideFlowbiteAccordionTitleConfig = (
  config: Partial<FlowbiteAccordionTitleConfig>
): Provider[] => [
  {
    provide: FlowbiteAccordionTitleConfigToken,
    useValue: { ...defaultFlowbiteAccordionTitleConfig, ...config },
  },
];

/**
 * Inject the AccordionTitle configuration
 * @see {@link defaultFlowbiteAccordionTitleConfig}
 * @returns The configuration
 */
export const injectFlowbiteAccordionTitleConfig = (): FlowbiteAccordionTitleConfig =>
  inject(FlowbiteAccordionTitleConfigToken, { optional: true }) ??
  defaultFlowbiteAccordionTitleConfig;
