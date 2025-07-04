import { flowbiteCardHeaderTheme, type FlowbiteCardHeaderTheme } from '../card-header/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteCardHeaderConfig {
  /**
   * The default theme of CardHeader
   */
  baseTheme: FlowbiteCardHeaderTheme;
  /**
   * The custom theme of CardHeader
   */
  customTheme: DeepPartial<FlowbiteCardHeaderTheme>;
}

export const defaultFlowbiteCardHeaderConfig: FlowbiteCardHeaderConfig = {
  baseTheme: flowbiteCardHeaderTheme,
  customTheme: {},
};

export const FlowbiteCardHeaderConfigToken = new InjectionToken<FlowbiteCardHeaderConfig>(
  'FlowbiteCardHeaderConfigToken'
);

/**
 * Provide the default CardHeader configuration
 * @param config The CardHeader configuration
 * @returns The provider
 */
export const provideFlowbiteCardHeaderConfig = (
  config: Partial<FlowbiteCardHeaderConfig>
): Provider[] => [
  {
    provide: FlowbiteCardHeaderConfigToken,
    useValue: { ...defaultFlowbiteCardHeaderConfig, ...config },
  },
];

/**
 * Inject the CardHeader configuration
 * @see {@link defaultFlowbiteCardHeaderConfig}
 * @returns The configuration
 */
export const injectFlowbiteCardHeaderConfig = (): FlowbiteCardHeaderConfig =>
  inject(FlowbiteCardHeaderConfigToken, { optional: true }) ?? defaultFlowbiteCardHeaderConfig;
