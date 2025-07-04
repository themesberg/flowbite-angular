import type {
  FlowbiteIndicatorColors,
  FlowbiteIndicatorPositions,
  FlowbiteIndicatorSizes,
} from '../indicator/theme';
import { flowbiteIndicatorTheme, type FlowbiteIndicatorTheme } from '../indicator/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteIndicatorConfig {
  /**
   * The default theme of indicator
   */
  baseTheme: FlowbiteIndicatorTheme;
  /**
   * The default color of indicator
   */
  color: keyof FlowbiteIndicatorColors;
  /**
   * The default size of indicator
   */
  size: keyof FlowbiteIndicatorSizes;
  /**
   * Whether the indicator has border
   */
  border: boolean;
  /**
   * The default position of indicator
   */
  position: keyof FlowbiteIndicatorPositions | undefined;
  /**
   * The custom theme of indicator
   */
  customTheme: DeepPartial<FlowbiteIndicatorTheme>;
}

export const defaultFlowbiteIndicatorConfig: FlowbiteIndicatorConfig = {
  baseTheme: flowbiteIndicatorTheme,
  color: 'default',
  size: 'md',
  border: false,
  position: undefined,
  customTheme: {},
};

export const FlowbiteIndicatorConfigToken = new InjectionToken<FlowbiteIndicatorConfig>(
  'FlowbiteIndicatorConfigToken'
);

/**
 * Provide the default Indicator configuration
 * @param config The Indicator configuration
 * @returns The provider
 */
export const provideFlowbiteIndicatorConfig = (
  config: Partial<FlowbiteIndicatorConfig>
): Provider[] => [
  {
    provide: FlowbiteIndicatorConfigToken,
    useValue: { ...defaultFlowbiteIndicatorConfig, ...config },
  },
];

/**
 * Inject the Indicator configuration
 * @see {@link defaultFlowbiteIndicatorConfig}
 * @returns The configuration
 */
export const injectFlowbiteIndicatorConfig = (): FlowbiteIndicatorConfig =>
  inject(FlowbiteIndicatorConfigToken, { optional: true }) ?? defaultFlowbiteIndicatorConfig;
