import { flowbiteModalFooterTheme, type FlowbiteModalFooterTheme } from '../modal-footer/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteModalFooterConfig {
  /**
   * The default theme of modalFooter
   */
  baseTheme: FlowbiteModalFooterTheme;

  /**
   * The custom theme of modalFooter
   */
  customTheme: DeepPartial<FlowbiteModalFooterTheme>;
}

export const defaultFlowbiteModalFooterConfig: FlowbiteModalFooterConfig = {
  baseTheme: flowbiteModalFooterTheme,
  customTheme: {},
};

export const FlowbiteModalFooterConfigToken = new InjectionToken<FlowbiteModalFooterConfig>(
  'FlowbiteModalFooterConfigToken'
);

/**
 * Provide the default ModalFooter configuration
 * @param config The ModalFooter configuration
 * @returns The provider
 */
export const provideFlowbiteModalFooterConfig = (
  config: Partial<FlowbiteModalFooterConfig>
): Provider[] => [
  {
    provide: FlowbiteModalFooterConfigToken,
    useValue: { ...defaultFlowbiteModalFooterConfig, ...config },
  },
];

/**
 * Inject the ModalFooter configuration
 * @see {@link defaultFlowbiteModalFooterConfig}
 * @returns The configuration
 */
export const injectFlowbiteModalFooterConfig = (): FlowbiteModalFooterConfig =>
  inject(FlowbiteModalFooterConfigToken, { optional: true }) ?? defaultFlowbiteModalFooterConfig;
