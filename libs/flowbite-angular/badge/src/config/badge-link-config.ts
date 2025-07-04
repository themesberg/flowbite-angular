import { flowbiteBadgeLinkTheme, type FlowbiteBadgeLinkTheme } from '../badge-link/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBadgeLinkConfig {
  /**
   * The default theme of BadgeLink
   */
  baseTheme: FlowbiteBadgeLinkTheme;

  /**
   * The custom theme of BadgeLink
   */
  customTheme: DeepPartial<FlowbiteBadgeLinkTheme>;
}

export const defaultFlowbiteBadgeLinkConfig: FlowbiteBadgeLinkConfig = {
  baseTheme: flowbiteBadgeLinkTheme,
  customTheme: {},
};

export const FlowbiteBadgeLinkConfigToken = new InjectionToken<FlowbiteBadgeLinkConfig>(
  'FlowbiteBadgeLinkConfigToken'
);

/**
 * Provide the default BadgeLink configuration
 * @param config The BadgeLink configuration
 * @returns The provider
 */
export const provideFlowbiteBadgeLinkConfig = (
  config: Partial<FlowbiteBadgeLinkConfig>
): Provider[] => [
  {
    provide: FlowbiteBadgeLinkConfigToken,
    useValue: { ...defaultFlowbiteBadgeLinkConfig, ...config },
  },
];

/**
 * Inject the BadgeLink configuration
 * @see {@link defaultFlowbiteBadgeLinkConfig}
 * @returns The configuration
 */
export const injectFlowbiteBadgeLinkConfig = (): FlowbiteBadgeLinkConfig =>
  inject(FlowbiteBadgeLinkConfigToken, { optional: true }) ?? defaultFlowbiteBadgeLinkConfig;
