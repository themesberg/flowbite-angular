import type { FlowbiteModalOverlayPositions } from '../modal-overlay/theme';
import { flowbiteModalOverlayTheme, type FlowbiteModalOverlayTheme } from '../modal-overlay/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteModalOverlayConfig {
  /**
   * The default theme of modalOverlay
   */
  baseTheme: FlowbiteModalOverlayTheme;
  /**
   * The default position of modalOverlay
   */
  position: keyof FlowbiteModalOverlayPositions;
  /**
   * The custom theme of modalOverlay
   */
  customTheme: DeepPartial<FlowbiteModalOverlayTheme>;
}

export const defaultFlowbiteModalOverlayConfig: FlowbiteModalOverlayConfig = {
  baseTheme: flowbiteModalOverlayTheme,
  position: 'center',
  customTheme: {},
};

export const FlowbiteModalOverlayConfigToken = new InjectionToken<FlowbiteModalOverlayConfig>(
  'FlowbiteModalOverlayConfigToken'
);

/**
 * Provide the default ModalOverlay configuration
 * @param config The ModalOverlay configuration
 * @returns The provider
 */
export const provideFlowbiteModalOverlayConfig = (
  config: Partial<FlowbiteModalOverlayConfig>
): Provider[] => [
  {
    provide: FlowbiteModalOverlayConfigToken,
    useValue: { ...defaultFlowbiteModalOverlayConfig, ...config },
  },
];

/**
 * Inject the ModalOverlay configuration
 * @see {@link defaultFlowbiteModalOverlayConfig}
 * @returns The configuration
 */
export const injectFlowbiteModalOverlayConfig = (): FlowbiteModalOverlayConfig =>
  inject(FlowbiteModalOverlayConfigToken, { optional: true }) ?? defaultFlowbiteModalOverlayConfig;
