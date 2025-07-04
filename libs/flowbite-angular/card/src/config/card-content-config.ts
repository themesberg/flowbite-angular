import { flowbiteCardContentTheme, type FlowbiteCardContentTheme } from '../card-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteCardContentConfig {
  /**
   * The default theme of CardContent
   */
  baseTheme: FlowbiteCardContentTheme;

  /**
   * The custom theme of CardContent
   */
  customTheme: DeepPartial<FlowbiteCardContentTheme>;
}

export const defaultFlowbiteCardContentConfig: FlowbiteCardContentConfig = {
  baseTheme: flowbiteCardContentTheme,
  customTheme: {},
};

export const FlowbiteCardContentConfigToken = new InjectionToken<FlowbiteCardContentConfig>(
  'FlowbiteCardContentConfigToken'
);

/**
 * Provide the default CardContent configuration
 * @param config The CardContent configuration
 * @returns The provider
 */
export const provideFlowbiteCardContentConfig = (
  config: Partial<FlowbiteCardContentConfig>
): Provider[] => [
  {
    provide: FlowbiteCardContentConfigToken,
    useValue: { ...defaultFlowbiteCardContentConfig, ...config },
  },
];

/**
 * Inject the CardContent configuration
 * @see {@link defaultFlowbiteCardContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteCardContentConfig = (): FlowbiteCardContentConfig =>
  inject(FlowbiteCardContentConfigToken, { optional: true }) ?? defaultFlowbiteCardContentConfig;
