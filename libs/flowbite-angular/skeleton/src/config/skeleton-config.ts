import { flowbiteSkeletonTheme, type FlowbiteSkeletonTheme } from '../skeleton/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteSkeletonConfig {
  /**
   * The default theme of skeleton
   */
  baseTheme: FlowbiteSkeletonTheme;
  /**
   * The default count of skeleton
   */
  count: number;
  /**
   * The custom theme of skeleton
   */
  customTheme: DeepPartial<FlowbiteSkeletonTheme>;
}

export const defaultFlowbiteSkeletonConfig: FlowbiteSkeletonConfig = {
  baseTheme: flowbiteSkeletonTheme,
  count: 5,
  customTheme: {},
};

export const FlowbiteSkeletonConfigToken = new InjectionToken<FlowbiteSkeletonConfig>(
  'FlowbiteSkeletonConfigToken'
);

/**
 * Provide the default Skeleton configuration
 * @param config The Skeleton configuration
 * @returns The provider
 */
export const provideFlowbiteSkeletonConfig = (
  config: Partial<FlowbiteSkeletonConfig>
): Provider[] => [
  {
    provide: FlowbiteSkeletonConfigToken,
    useValue: { ...defaultFlowbiteSkeletonConfig, ...config },
  },
];

/**
 * Inject the Skeleton configuration
 * @see {@link defaultFlowbiteSkeletonConfig}
 * @returns The configuration
 */
export const injectFlowbiteSkeletonConfig = (): FlowbiteSkeletonConfig =>
  inject(FlowbiteSkeletonConfigToken, { optional: true }) ?? defaultFlowbiteSkeletonConfig;
