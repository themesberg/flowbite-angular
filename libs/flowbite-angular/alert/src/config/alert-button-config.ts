import { flowbiteAlertButtonTheme, type FlowbiteAlertButtonTheme } from '../alert-button/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteAlertButtonConfig {
  /**
   * The default theme of AlertButton
   */
  baseTheme: FlowbiteAlertButtonTheme;

  /**
   * The custom theme of AlertButton
   */
  customTheme: DeepPartial<FlowbiteAlertButtonTheme>;
}

export const defaultFlowbiteAlertButtonConfig: FlowbiteAlertButtonConfig = {
  baseTheme: flowbiteAlertButtonTheme,
  customTheme: {},
};

export const FlowbiteAlertButtonConfigToken = new InjectionToken<FlowbiteAlertButtonConfig>(
  'FlowbiteAlertButtonConfigToken'
);

/**
 * Provide the default AlertButton configuration
 * @param config The AlertButton configuration
 * @returns The provider
 */
export const provideFlowbiteAlertButtonConfig = (
  config: Partial<FlowbiteAlertButtonConfig>
): Provider[] => [
  {
    provide: FlowbiteAlertButtonConfigToken,
    useValue: { ...defaultFlowbiteAlertButtonConfig, ...config },
  },
];

/**
 * Inject the AlertButton configuration
 * @see {@link defaultFlowbiteAlertButtonConfig}
 * @returns The configuration
 */
export const injectFlowbiteAlertButtonConfig = (): FlowbiteAlertButtonConfig =>
  inject(FlowbiteAlertButtonConfigToken, { optional: true }) ?? defaultFlowbiteAlertButtonConfig;
