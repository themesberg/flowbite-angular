import type { FlowbiteIconButtonTheme } from '../icon-button/theme';
import { flowbiteIconButtonTheme } from '../icon-button/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteIconButtonConfig {
  /**
   * The default theme of icon-button
   */
  baseTheme: FlowbiteIconButtonTheme;
  /**
   * The custom theme of icon-button
   */
  customTheme: DeepPartial<FlowbiteIconButtonTheme>;
}

export const defaultFlowbiteIconButtonConfig: FlowbiteIconButtonConfig = {
  baseTheme: flowbiteIconButtonTheme,
  customTheme: {},
};

export const FlowbiteIconButtonConfigToken = new InjectionToken<FlowbiteIconButtonConfig>(
  'FlowbiteIconButtonConfigToken'
);

/**
 * Provide the default IconButton configuration
 * @param config The IconButton configuration
 * @returns The provider
 */
export const provideFlowbiteIconButtonConfig = (
  config: Partial<FlowbiteIconButtonConfig>
): Provider[] => [
  {
    provide: FlowbiteIconButtonConfigToken,
    useValue: { ...defaultFlowbiteIconButtonConfig, ...config },
  },
];

/**
 * Inject the IconButton configuration
 * @see {@link defaultFlowbiteIconButtonConfig}
 * @returns The configuration
 */
export const injectFlowbiteIconButtonConfig = (): FlowbiteIconButtonConfig =>
  inject(FlowbiteIconButtonConfigToken, { optional: true }) ?? defaultFlowbiteIconButtonConfig;
