import type { FlowbiteTooltipColors } from '../tooltip/theme';
import { flowbiteTooltipTheme, type FlowbiteTooltipTheme } from '../tooltip/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTooltipConfig {
  /**
   * The default theme of tooltip
   */
  baseTheme: FlowbiteTooltipTheme;
  /**
   * The default color of tooltip
   */
  color: keyof FlowbiteTooltipColors;
  /**
   * The custom theme of tooltip
   */
  customTheme: DeepPartial<FlowbiteTooltipTheme>;
}

export const defaultFlowbiteTooltipConfig: FlowbiteTooltipConfig = {
  baseTheme: flowbiteTooltipTheme,
  color: 'default',
  customTheme: {},
};

export const FlowbiteTooltipConfigToken = new InjectionToken<FlowbiteTooltipConfig>(
  'FlowbiteTooltipConfigToken'
);

/**
 * Provide the default Tooltip configuration
 * @param config The Tooltip configuration
 * @returns The provider
 */
export const provideFlowbiteTooltipConfig = (
  config: Partial<FlowbiteTooltipConfig>
): Provider[] => [
  {
    provide: FlowbiteTooltipConfigToken,
    useValue: { ...defaultFlowbiteTooltipConfig, ...config },
  },
];

/**
 * Inject the Tooltip configuration
 * @see {@link defaultFlowbiteTooltipConfig}
 * @returns The configuration
 */
export const injectFlowbiteTooltipConfig = (): FlowbiteTooltipConfig =>
  inject(FlowbiteTooltipConfigToken, { optional: true }) ?? defaultFlowbiteTooltipConfig;
