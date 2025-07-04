import { flowbiteModalHeaderTheme, type FlowbiteModalHeaderTheme } from '../modal-header/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteModalHeaderConfig {
  /**
   * The default theme of modalHeader
   */
  baseTheme: FlowbiteModalHeaderTheme;

  /**
   * The custom theme of modalHeader
   */
  customTheme: DeepPartial<FlowbiteModalHeaderTheme>;
}

export const defaultFlowbiteModalHeaderConfig: FlowbiteModalHeaderConfig = {
  baseTheme: flowbiteModalHeaderTheme,
  customTheme: {},
};

export const FlowbiteModalHeaderConfigToken = new InjectionToken<FlowbiteModalHeaderConfig>(
  'FlowbiteModalHeaderConfigToken'
);

/**
 * Provide the default ModalHeader configuration
 * @param config The ModalHeader configuration
 * @returns The provider
 */
export const provideFlowbiteModalHeaderConfig = (
  config: Partial<FlowbiteModalHeaderConfig>
): Provider[] => [
  {
    provide: FlowbiteModalHeaderConfigToken,
    useValue: { ...defaultFlowbiteModalHeaderConfig, ...config },
  },
];

/**
 * Inject the ModalHeader configuration
 * @see {@link defaultFlowbiteModalHeaderConfig}
 * @returns The configuration
 */
export const injectFlowbiteModalHeaderConfig = (): FlowbiteModalHeaderConfig =>
  inject(FlowbiteModalHeaderConfigToken, { optional: true }) ?? defaultFlowbiteModalHeaderConfig;
