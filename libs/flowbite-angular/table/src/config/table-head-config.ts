import { flowbiteTableHeadTheme, type FlowbiteTableHeadTheme } from '../table-head/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTableHeadConfig {
  /**
   * The default theme of table-head
   */
  baseTheme: FlowbiteTableHeadTheme;

  /**
   * The custom theme of table-head
   */
  customTheme: DeepPartial<FlowbiteTableHeadTheme>;
}

export const defaultFlowbiteTableHeadConfig: FlowbiteTableHeadConfig = {
  baseTheme: flowbiteTableHeadTheme,
  customTheme: {},
};

export const FlowbiteTableHeadConfigToken = new InjectionToken<FlowbiteTableHeadConfig>(
  'FlowbiteTableHeadConfigToken'
);

/**
 * Provide the default TableHead configuration
 * @param config The TableHead configuration
 * @returns The provider
 */
export const provideFlowbiteTableHeadConfig = (
  config: Partial<FlowbiteTableHeadConfig>
): Provider[] => [
  {
    provide: FlowbiteTableHeadConfigToken,
    useValue: { ...defaultFlowbiteTableHeadConfig, ...config },
  },
];

/**
 * Inject the TableHead configuration
 * @see {@link defaultFlowbiteTableHeadConfig}
 * @returns The configuration
 */
export const injectFlowbiteTableHeadConfig = (): FlowbiteTableHeadConfig =>
  inject(FlowbiteTableHeadConfigToken, { optional: true }) ?? defaultFlowbiteTableHeadConfig;
