import { flowbiteBadgeButtonTheme, type FlowbiteBadgeButtonTheme } from '../badge-button/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBadgeButtonConfig {
  /**
   * The default theme of BadgeButton
   */
  baseTheme: FlowbiteBadgeButtonTheme;

  /**
   * The custom theme of BadgeButton
   */
  customTheme: DeepPartial<FlowbiteBadgeButtonTheme>;
}

export const defaultFlowbiteBadgeButtonConfig: FlowbiteBadgeButtonConfig = {
  baseTheme: flowbiteBadgeButtonTheme,
  customTheme: {},
};

export const FlowbiteBadgeButtonConfigToken = new InjectionToken<FlowbiteBadgeButtonConfig>(
  'FlowbiteBadgeButtonConfigToken'
);

/**
 * Provide the default BadgeButton configuration
 * @param config The BadgeButton configuration
 * @returns The provider
 */
export const provideFlowbiteBadgeButtonConfig = (
  config: Partial<FlowbiteBadgeButtonConfig>
): Provider[] => [
  {
    provide: FlowbiteBadgeButtonConfigToken,
    useValue: { ...defaultFlowbiteBadgeButtonConfig, ...config },
  },
];

/**
 * Inject the BadgeButton configuration
 * @see {@link defaultFlowbiteBadgeButtonConfig}
 * @returns The configuration
 */
export const injectFlowbiteBadgeButtonConfig = (): FlowbiteBadgeButtonConfig =>
  inject(FlowbiteBadgeButtonConfigToken, { optional: true }) ?? defaultFlowbiteBadgeButtonConfig;
