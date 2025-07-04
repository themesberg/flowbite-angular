import type { FlowbiteAccordionColors, FlowbiteAccordionTheme } from '../accordion/theme';
import { flowbiteAccordionTheme } from '../accordion/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteAccordionConfig {
  /**
   * The default theme of accordion.
   */
  baseTheme: FlowbiteAccordionTheme;
  /**
   * The default color of accordion.
   */
  color: keyof FlowbiteAccordionColors;
  /**
   * Whether the accordion is flush.
   */
  flush: boolean;
  /**
   * The custom theme of button.
   */
  customTheme: DeepPartial<FlowbiteAccordionTheme>;
}

export const defaultFlowbiteAccordionConfig: FlowbiteAccordionConfig = {
  baseTheme: flowbiteAccordionTheme,
  color: 'default',
  flush: false,
  customTheme: {},
};

export const FlowbiteAccordionConfigToken = new InjectionToken<FlowbiteAccordionConfig>(
  'FlowbiteAccordionConfig'
);

/**
 * Provide the default Accordion configuration
 * @param config The Accordion configuration
 * @returns The provider
 */
export const provideFlowbiteAccordionConfig = (
  config: Partial<FlowbiteAccordionConfig>
): Provider[] => [
  {
    provide: FlowbiteAccordionConfigToken,
    useValue: { ...defaultFlowbiteAccordionConfig, ...config },
  },
];

/**
 * Inject the Accordion configuration
 * @see {@link defaultFlowbiteAccordionConfig}
 * @returns The configuration
 */
export const injectFlowbiteAccordionConfig = (): FlowbiteAccordionConfig =>
  inject(FlowbiteAccordionConfigToken, { optional: true }) ?? defaultFlowbiteAccordionConfig;
