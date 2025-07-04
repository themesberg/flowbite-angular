import { flowbiteTabButtonTheme, type FlowbiteTabButtonTheme } from '../tab-button/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTabButtonConfig {
  /**
   * The default theme of TabButton
   */
  baseTheme: FlowbiteTabButtonTheme;

  /**
   * The custom theme of TabButton
   */
  customTheme: DeepPartial<FlowbiteTabButtonTheme>;
}

export const defaultFlowbiteTabButtonConfig: FlowbiteTabButtonConfig = {
  baseTheme: flowbiteTabButtonTheme,
  customTheme: {},
};

export const FlowbiteTabButtonConfigToken = new InjectionToken<FlowbiteTabButtonConfig>(
  'FlowbiteTabButtonConfigToken'
);

/**
 * Provide the default TabButton configuration
 * @param config The TabButton configuration
 * @returns The provider
 */
export const provideFlowbiteTabButtonConfig = (
  config: Partial<FlowbiteTabButtonConfig>
): Provider[] => [
  {
    provide: FlowbiteTabButtonConfigToken,
    useValue: { ...defaultFlowbiteTabButtonConfig, ...config },
  },
];

/**
 * Inject the TabButton configuration
 * @see {@link defaultFlowbiteTabButtonConfig}
 * @returns The configuration
 */
export const injectFlowbiteTabButtonConfig = (): FlowbiteTabButtonConfig =>
  inject(FlowbiteTabButtonConfigToken, { optional: true }) ?? defaultFlowbiteTabButtonConfig;
