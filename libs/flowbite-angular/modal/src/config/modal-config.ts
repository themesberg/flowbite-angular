import { flowbiteModalTheme, type FlowbiteModalTheme } from '../modal/theme';

import type { DeepPartial, FlowbiteSizes } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteModalConfig {
  /**
   * The default theme of modal
   */
  baseTheme: FlowbiteModalTheme;
  /**
   * The default size of modal
   */
  size: keyof FlowbiteSizes;
  /**
   * The custom theme of modal
   */
  customTheme: DeepPartial<FlowbiteModalTheme>;
}

export const defaultFlowbiteModalConfig: FlowbiteModalConfig = {
  baseTheme: flowbiteModalTheme,
  size: 'md',
  customTheme: {},
};

export const FlowbiteModalConfigToken = new InjectionToken<FlowbiteModalConfig>(
  'FlowbiteModalConfigToken'
);

/**
 * Provide the default Modal configuration
 * @param config The Modal configuration
 * @returns The provider
 */
export const provideFlowbiteModalConfig = (config: Partial<FlowbiteModalConfig>): Provider[] => [
  {
    provide: FlowbiteModalConfigToken,
    useValue: { ...defaultFlowbiteModalConfig, ...config },
  },
];

/**
 * Inject the Modal configuration
 * @see {@link defaultFlowbiteModalConfig}
 * @returns The configuration
 */
export const injectFlowbiteModalConfig = (): FlowbiteModalConfig =>
  inject(FlowbiteModalConfigToken, { optional: true }) ?? defaultFlowbiteModalConfig;
