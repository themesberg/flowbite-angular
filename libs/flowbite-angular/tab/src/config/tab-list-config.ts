import { flowbiteTabListTheme, type FlowbiteTabListTheme } from '../tab-list/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTabListConfig {
  /**
   * The default theme of TabList
   */
  baseTheme: FlowbiteTabListTheme;

  /**
   * The custom theme of TabList
   */
  customTheme: DeepPartial<FlowbiteTabListTheme>;
}

export const defaultFlowbiteTabListConfig: FlowbiteTabListConfig = {
  baseTheme: flowbiteTabListTheme,
  customTheme: {},
};

export const FlowbiteTabListConfigToken = new InjectionToken<FlowbiteTabListConfig>(
  'FlowbiteTabListConfigToken'
);

/**
 * Provide the default TabList configuration
 * @param config The TabList configuration
 * @returns The provider
 */
export const provideFlowbiteTabListConfig = (
  config: Partial<FlowbiteTabListConfig>
): Provider[] => [
  {
    provide: FlowbiteTabListConfigToken,
    useValue: { ...defaultFlowbiteTabListConfig, ...config },
  },
];

/**
 * Inject the TabList configuration
 * @see {@link defaultFlowbiteTabListConfig}
 * @returns The configuration
 */
export const injectFlowbiteTabListConfig = (): FlowbiteTabListConfig =>
  inject(FlowbiteTabListConfigToken, { optional: true }) ?? defaultFlowbiteTabListConfig;
