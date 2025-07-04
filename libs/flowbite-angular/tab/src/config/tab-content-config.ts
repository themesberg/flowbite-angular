import { flowbiteTabContentTheme, type FlowbiteTabContentTheme } from '../tab-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTabContentConfig {
  /**
   * The default theme of TabContent
   */
  baseTheme: FlowbiteTabContentTheme;

  /**
   * The custom theme of TabContent
   */
  customTheme: DeepPartial<FlowbiteTabContentTheme>;
}

export const defaultFlowbiteTabContentConfig: FlowbiteTabContentConfig = {
  baseTheme: flowbiteTabContentTheme,
  customTheme: {},
};

export const FlowbiteTabContentConfigToken = new InjectionToken<FlowbiteTabContentConfig>(
  'FlowbiteTabContentConfigToken'
);

/**
 * Provide the default TabContent configuration
 * @param config The TabContent configuration
 * @returns The provider
 */
export const provideFlowbiteTabContentConfig = (
  config: Partial<FlowbiteTabContentConfig>
): Provider[] => [
  {
    provide: FlowbiteTabContentConfigToken,
    useValue: { ...defaultFlowbiteTabContentConfig, ...config },
  },
];

/**
 * Inject the TabContent configuration
 * @see {@link defaultFlowbiteTabContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteTabContentConfig = (): FlowbiteTabContentConfig =>
  inject(FlowbiteTabContentConfigToken, { optional: true }) ?? defaultFlowbiteTabContentConfig;
