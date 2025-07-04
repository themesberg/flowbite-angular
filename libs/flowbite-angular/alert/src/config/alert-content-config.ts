import { flowbiteAlertContentTheme, type FlowbiteAlertContentTheme } from '../alert-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteAlertContentConfig {
  /**
   * The default theme of AlertContent
   */
  baseTheme: FlowbiteAlertContentTheme;

  /**
   * The custom theme of AlertContent
   */
  customTheme: DeepPartial<FlowbiteAlertContentTheme>;
}

export const defaultFlowbiteAlertContentConfig: FlowbiteAlertContentConfig = {
  baseTheme: flowbiteAlertContentTheme,
  customTheme: {},
};

export const FlowbiteAlertContentConfigToken = new InjectionToken<FlowbiteAlertContentConfig>(
  'FlowbiteAlertContentConfigToken'
);

/**
 * Provide the default AlertContent configuration
 * @param config The AlertContent configuration
 * @returns The provider
 */
export const provideFlowbiteAlertContentConfig = (
  config: Partial<FlowbiteAlertContentConfig>
): Provider[] => [
  {
    provide: FlowbiteAlertContentConfigToken,
    useValue: { ...defaultFlowbiteAlertContentConfig, ...config },
  },
];

/**
 * Inject the AlertContent configuration
 * @see {@link defaultFlowbiteAlertContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteAlertContentConfig = (): FlowbiteAlertContentConfig =>
  inject(FlowbiteAlertContentConfigToken, { optional: true }) ?? defaultFlowbiteAlertContentConfig;
