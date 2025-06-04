import type { FlowbiteInputFieldColors, FlowbiteInputFieldSizes } from '../input-field/theme';
import { flowbiteInputFieldTheme, type FlowbiteInputFieldTheme } from '../input-field/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteInputFieldConfig {
  /**
   * The default theme of InputField
   */
  baseTheme: FlowbiteInputFieldTheme;
  /**
   * The default theme of InputField
   */
  size: keyof FlowbiteInputFieldSizes;
  /**
   * The default theme of InputField
   */
  color: keyof FlowbiteInputFieldColors;
  /**
   * The custom theme of InputField
   */
  customTheme: DeepPartial<FlowbiteInputFieldTheme>;
}

export const defaultFlowbiteInputFieldConfig: FlowbiteInputFieldConfig = {
  baseTheme: flowbiteInputFieldTheme,
  size: 'md',
  color: 'default',
  customTheme: {},
};

export const FlowbiteInputFieldConfigToken = new InjectionToken<FlowbiteInputFieldConfig>(
  'FlowbiteInputFieldConfigToken'
);

/**
 * Provide the default InputField configuration
 * @param config The InputField configuration
 * @returns The provider
 */
export const provideFlowbiteInputFieldConfig = (
  config: Partial<FlowbiteInputFieldConfig>
): Provider[] => [
  {
    provide: FlowbiteInputFieldConfigToken,
    useValue: { ...defaultFlowbiteInputFieldConfig, ...config },
  },
];

/**
 * Inject the InputField configuration
 * @see {@link defaultFlowbiteInputFieldConfig}
 * @returns The configuration
 */
export const injectFlowbiteInputFieldConfig = (): FlowbiteInputFieldConfig =>
  inject(FlowbiteInputFieldConfigToken, { optional: true }) ?? defaultFlowbiteInputFieldConfig;
