import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from '../base-button/theme';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteBaseButtonConfig {
  /**
   * The default color of button.
   */
  color: keyof FlowbiteBaseButtonColors;
  /**
   * The default size of button.
   */
  size: keyof FlowbiteBaseButtonSizes;
  /**
   * Whether the button is pill.
   */
  pill: boolean;
  /**
   * Whether the button is outline.
   */
  outline: boolean;
}

export const defaultFlowbiteBaseButtonConfig: FlowbiteBaseButtonConfig = {
  color: 'info',
  size: 'md',
  pill: false,
  outline: false,
};

export const FlowbiteBaseButtonConfigToken = new InjectionToken<FlowbiteBaseButtonConfig>(
  'FlowbiteBaseButtonConfigToken'
);

/**
 * Provide the default BaseButton configuration
 * @param config The BaseButton configuration
 * @returns The provider
 */
export const provideFlowbiteBaseButtonConfig = (
  config: Partial<FlowbiteBaseButtonConfig>
): Provider[] => [
  {
    provide: FlowbiteBaseButtonConfigToken,
    useValue: { ...defaultFlowbiteBaseButtonConfig, ...config },
  },
];

/**
 * Inject the BaseButton configuration
 * @see {@link defaultFlowbiteBaseButtonConfig}
 * @returns The configuration
 */
export const injectFlowbiteBaseButtonConfig = (): FlowbiteBaseButtonConfig =>
  inject(FlowbiteBaseButtonConfigToken, { optional: true }) ?? defaultFlowbiteBaseButtonConfig;
