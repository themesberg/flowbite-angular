import { flowbiteTableBodyTheme, type FlowbiteTableBodyTheme } from '../table-body/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTableBodyConfig {
  /**
   * The default theme of table-body
   */
  baseTheme: FlowbiteTableBodyTheme;

  /**
   * The custom theme of table-body
   */
  customTheme: DeepPartial<FlowbiteTableBodyTheme>;
}

export const defaultFlowbiteTableBodyConfig: FlowbiteTableBodyConfig = {
  baseTheme: flowbiteTableBodyTheme,
  customTheme: {},
};

export const FlowbiteTableBodyConfigToken = new InjectionToken<FlowbiteTableBodyConfig>(
  'FlowbiteTableBodyConfigToken'
);

/**
 * Provide the default TableBody configuration
 * @param config The TableBody configuration
 * @returns The provider
 */
export const provideFlowbiteTableBodyConfig = (
  config: Partial<FlowbiteTableBodyConfig>
): Provider[] => [
  {
    provide: FlowbiteTableBodyConfigToken,
    useValue: { ...defaultFlowbiteTableBodyConfig, ...config },
  },
];

/**
 * Inject the TableBody configuration
 * @see {@link defaultFlowbiteTableBodyConfig}
 * @returns The configuration
 */
export const injectFlowbiteTableBodyConfig = (): FlowbiteTableBodyConfig =>
  inject(FlowbiteTableBodyConfigToken, { optional: true }) ?? defaultFlowbiteTableBodyConfig;
