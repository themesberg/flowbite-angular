import type { FLowbiteCardColors, FlowbiteCardOrientation, FlowbiteCardSizes } from '../card/theme';
import { flowbiteCardTheme, type FlowbiteCardTheme } from '../card/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteCardConfig {
  /**
   * The default theme of card
   */
  baseTheme: FlowbiteCardTheme;
  /**
   * The default color of card
   */
  color: keyof FLowbiteCardColors;
  /**
   * The default size of card
   */
  size: keyof FlowbiteCardSizes;
  /**
   * The default orientation of card
   */
  orientation: keyof FlowbiteCardOrientation;
  /**
   * The custom theme of card
   */
  customTheme: DeepPartial<FlowbiteCardTheme>;
}

export const defaultFlowbiteCardConfig: FlowbiteCardConfig = {
  baseTheme: flowbiteCardTheme,
  color: 'gray',
  size: 'md',
  orientation: 'vertical',
  customTheme: {},
};

export const FlowbiteCardConfigToken = new InjectionToken<FlowbiteCardConfig>(
  'FlowbiteCardConfigToken'
);

/**
 * Provide the default Card configuration
 * @param config The Card configuration
 * @returns The provider
 */
export const provideFlowbiteCardConfig = (config: Partial<FlowbiteCardConfig>): Provider[] => [
  {
    provide: FlowbiteCardConfigToken,
    useValue: { ...defaultFlowbiteCardConfig, ...config },
  },
];

/**
 * Inject the Card configuration
 * @see {@link defaultFlowbiteCardConfig}
 * @returns The configuration
 */
export const injectFlowbiteCardConfig = (): FlowbiteCardConfig =>
  inject(FlowbiteCardConfigToken, { optional: true }) ?? defaultFlowbiteCardConfig;
