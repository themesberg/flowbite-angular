import type { FlowbiteInputFieldColors } from '../input-field/theme';
import { flowbiteLabelTheme, type FlowbiteLabelTheme } from '../label/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteLabelConfig {
  /**
   * The default theme of Label
   */
  baseTheme: FlowbiteLabelTheme;
  /**
   * The default theme of Label
   */
  color: keyof FlowbiteInputFieldColors;
  /**
   * The custom theme of Label
   */
  customTheme: DeepPartial<FlowbiteLabelTheme>;
}

export const defaultFlowbiteLabelConfig: FlowbiteLabelConfig = {
  baseTheme: flowbiteLabelTheme,
  color: 'info',
  customTheme: {},
};

export const FlowbiteLabelConfigToken = new InjectionToken<FlowbiteLabelConfig>(
  'FlowbiteLabelConfigToken'
);

/**
 * Provide the default Label configuration
 * @param config The Label configuration
 * @returns The provider
 */
export const provideFlowbiteLabelConfig = (config: Partial<FlowbiteLabelConfig>): Provider[] => [
  {
    provide: FlowbiteLabelConfigToken,
    useValue: { ...defaultFlowbiteLabelConfig, ...config },
  },
];

/**
 * Inject the Label configuration
 * @see {@link defaultFlowbiteLabelConfig}
 * @returns The configuration
 */
export const injectFlowbiteLabelConfig = (): FlowbiteLabelConfig =>
  inject(FlowbiteLabelConfigToken, { optional: true }) ?? defaultFlowbiteLabelConfig;
