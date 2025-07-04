import { flowbiteFormControlTheme, type FlowbiteFormControlTheme } from '../form-control/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteFormControlConfig {
  /**
   * The default theme of FormControl
   */
  baseTheme: FlowbiteFormControlTheme;
  /**
   * The custom theme of FormControl
   */
  customTheme: DeepPartial<FlowbiteFormControlTheme>;
}

export const defaultFlowbiteFormControlConfig: FlowbiteFormControlConfig = {
  baseTheme: flowbiteFormControlTheme,
  customTheme: {},
};

export const FlowbiteFormControlConfigToken = new InjectionToken<FlowbiteFormControlConfig>(
  'FlowbiteFormControlConfigToken'
);

/**
 * Provide the default FormControl configuration
 * @param config The FormControl configuration
 * @returns The provider
 */
export const provideFlowbiteFormControlConfig = (
  config: Partial<FlowbiteFormControlConfig>
): Provider[] => [
  {
    provide: FlowbiteFormControlConfigToken,
    useValue: { ...defaultFlowbiteFormControlConfig, ...config },
  },
];

/**
 * Inject the FormControl configuration
 * @see {@link defaultFlowbiteFormControlConfig}
 * @returns The configuration
 */
export const injectFlowbiteFormControlConfig = (): FlowbiteFormControlConfig =>
  inject(FlowbiteFormControlConfigToken, { optional: true }) ?? defaultFlowbiteFormControlConfig;
