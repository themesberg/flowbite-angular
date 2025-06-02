import {
  flowbiteAccordionTitleIconTheme,
  type FlowbiteAccordionTitleIconTheme,
} from '../accordion-title-icon/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteAccordionTitleIconConfig {
  /**
   * The default theme of AccordionTitleIcon
   */
  baseTheme: FlowbiteAccordionTitleIconTheme;

  /**
   * The custom theme of AccordionTitleIcon
   */
  customTheme: DeepPartial<FlowbiteAccordionTitleIconTheme>;
}

export const defaultFlowbiteAccordionTitleIconConfig: FlowbiteAccordionTitleIconConfig = {
  baseTheme: flowbiteAccordionTitleIconTheme,
  customTheme: {},
};

export const FlowbiteAccordionTitleIconConfigToken =
  new InjectionToken<FlowbiteAccordionTitleIconConfig>('FlowbiteAccordionTitleIconConfigToken');

/**
 * Provide the default AccordionTitleIcon configuration
 * @param config The AccordionTitleIcon configuration
 * @returns The provider
 */
export const provideFlowbiteAccordionTitleIconConfig = (
  config: Partial<FlowbiteAccordionTitleIconConfig>
): Provider[] => [
  {
    provide: FlowbiteAccordionTitleIconConfigToken,
    useValue: { ...defaultFlowbiteAccordionTitleIconConfig, ...config },
  },
];

/**
 * Inject the AccordionTitleIcon configuration
 * @see {@link defaultFlowbiteAccordionTitleIconConfig}
 * @returns The configuration
 */
export const injectFlowbiteAccordionTitleIconConfig = (): FlowbiteAccordionTitleIconConfig =>
  inject(FlowbiteAccordionTitleIconConfigToken, { optional: true }) ??
  defaultFlowbiteAccordionTitleIconConfig;
