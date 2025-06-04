import { flowbiteHelperTheme, type FlowbiteHelperTheme } from '../helper/theme';
import type { FlowbiteInputFieldColors } from '../input-field/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteHelperConfig {
  /**
   * The default theme of helper
   */
  baseTheme: FlowbiteHelperTheme;
  /**
   * The default theme of helper
   */
  color: keyof FlowbiteInputFieldColors;
  /**
   * The custom theme of helper
   */
  customTheme: DeepPartial<FlowbiteHelperTheme>;
}

export const defaultFlowbiteHelperConfig: FlowbiteHelperConfig = {
  baseTheme: flowbiteHelperTheme,
  color: 'default',
  customTheme: {},
};

export const FlowbiteHelperConfigToken = new InjectionToken<FlowbiteHelperConfig>(
  'FlowbiteHelperConfigToken'
);

/**
 * Provide the default Helper configuration
 * @param config The Helper configuration
 * @returns The provider
 */
export const provideFlowbiteHelperConfig = (config: Partial<FlowbiteHelperConfig>): Provider[] => [
  {
    provide: FlowbiteHelperConfigToken,
    useValue: { ...defaultFlowbiteHelperConfig, ...config },
  },
];

/**
 * Inject the Helper configuration
 * @see {@link defaultFlowbiteHelperConfig}
 * @returns The configuration
 */
export const injectFlowbiteHelperConfig = (): FlowbiteHelperConfig =>
  inject(FlowbiteHelperConfigToken, { optional: true }) ?? defaultFlowbiteHelperConfig;
