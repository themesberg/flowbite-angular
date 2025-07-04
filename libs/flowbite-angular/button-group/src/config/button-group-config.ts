import { flowbiteButtonGroupTheme, type FlowbiteButtonGroupTheme } from '../button-group/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteButtonGroupConfig {
  /**
   * The default theme of button-group
   */
  baseTheme: FlowbiteButtonGroupTheme;

  /**
   * The custom theme of button-group
   */
  customTheme: DeepPartial<FlowbiteButtonGroupTheme>;
}

export const defaultFlowbiteButtonGroupConfig: FlowbiteButtonGroupConfig = {
  baseTheme: flowbiteButtonGroupTheme,
  customTheme: {},
};

export const FlowbiteButtonGroupConfigToken = new InjectionToken<FlowbiteButtonGroupConfig>(
  'FlowbiteButtonGroupConfigToken'
);

/**
 * Provide the default ButtonGroup configuration
 * @param config The ButtonGroup configuration
 * @returns The provider
 */
export const provideFlowbiteButtonGroupConfig = (
  config: Partial<FlowbiteButtonGroupConfig>
): Provider[] => [
  {
    provide: FlowbiteButtonGroupConfigToken,
    useValue: { ...defaultFlowbiteButtonGroupConfig, ...config },
  },
];

/**
 * Inject the ButtonGroup configuration
 * @see {@link defaultFlowbiteButtonGroupConfig}
 * @returns The configuration
 */
export const injectFlowbiteButtonGroupConfig = (): FlowbiteButtonGroupConfig =>
  inject(FlowbiteButtonGroupConfigToken, { optional: true }) ?? defaultFlowbiteButtonGroupConfig;
