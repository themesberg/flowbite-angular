import type {
  FlowbiteFormFieldColors,
  FlowbiteFormFieldModes,
  FlowbiteFormFieldSizes,
} from '../form-field/theme';
import { flowbiteFormFieldTheme, type FlowbiteFormFieldTheme } from '../form-field/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteFormFieldConfig {
  /**
   * The default theme of FormField
   */
  baseTheme: FlowbiteFormFieldTheme;
  /**
   * The default size of FormField
   */
  size: keyof FlowbiteFormFieldSizes;
  /**
   * The default color of FormField
   */
  color: keyof FlowbiteFormFieldColors;
  /**
   * The default mode of FormField
   */
  mode: keyof FlowbiteFormFieldModes;
  /**
   * The custom theme of FormField
   */
  customTheme: DeepPartial<FlowbiteFormFieldTheme>;
}

export const defaultFlowbiteFormFieldConfig: FlowbiteFormFieldConfig = {
  baseTheme: flowbiteFormFieldTheme,
  size: 'md',
  color: 'default',
  mode: 'normal',
  customTheme: {},
};

export const FlowbiteFormFieldConfigToken = new InjectionToken<FlowbiteFormFieldConfig>(
  'FlowbiteFormFieldConfigToken'
);

/**
 * Provide the default FormField configuration
 * @param config The FormField configuration
 * @returns The provider
 */
export const provideFlowbiteFormFieldConfig = (
  config: Partial<FlowbiteFormFieldConfig>
): Provider[] => [
  {
    provide: FlowbiteFormFieldConfigToken,
    useValue: { ...defaultFlowbiteFormFieldConfig, ...config },
  },
];

/**
 * Inject the FormField configuration
 * @see {@link defaultFlowbiteFormFieldConfig}
 * @returns The configuration
 */
export const injectFlowbiteFormFieldConfig = (): FlowbiteFormFieldConfig =>
  inject(FlowbiteFormFieldConfigToken, { optional: true }) ?? defaultFlowbiteFormFieldConfig;
