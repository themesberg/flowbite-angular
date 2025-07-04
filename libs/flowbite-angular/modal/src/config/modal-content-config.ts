import { flowbiteModalContentTheme, type FlowbiteModalContentTheme } from '../modal-content/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteModalContentConfig {
  /**
   * The default theme of modalContent
   */
  baseTheme: FlowbiteModalContentTheme;

  /**
   * The custom theme of modalContent
   */
  customTheme: DeepPartial<FlowbiteModalContentTheme>;
}

export const defaultFlowbiteModalContentConfig: FlowbiteModalContentConfig = {
  baseTheme: flowbiteModalContentTheme,
  customTheme: {},
};

export const FlowbiteModalContentConfigToken = new InjectionToken<FlowbiteModalContentConfig>(
  'FlowbiteModalContentConfigToken'
);

/**
 * Provide the default ModalContent configuration
 * @param config The ModalContent configuration
 * @returns The provider
 */
export const provideFlowbiteModalContentConfig = (
  config: Partial<FlowbiteModalContentConfig>
): Provider[] => [
  {
    provide: FlowbiteModalContentConfigToken,
    useValue: { ...defaultFlowbiteModalContentConfig, ...config },
  },
];

/**
 * Inject the ModalContent configuration
 * @see {@link defaultFlowbiteModalContentConfig}
 * @returns The configuration
 */
export const injectFlowbiteModalContentConfig = (): FlowbiteModalContentConfig =>
  inject(FlowbiteModalContentConfigToken, { optional: true }) ?? defaultFlowbiteModalContentConfig;
