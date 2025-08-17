import type { FlowbiteTableColors } from '../table/theme';
import { flowbiteTableTheme, type FlowbiteTableTheme } from '../table/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTableConfig {
  /**
   * The default theme of table
   */
  baseTheme: FlowbiteTableTheme;
  /**
   * The default color of table.
   */
  color: keyof FlowbiteTableColors;
  /**
   * Whether the button is striped.
   */
  striped: boolean;
  /**
   * The custom theme of table
   */
  customTheme: DeepPartial<FlowbiteTableTheme>;
}

export const defaultFlowbiteTableConfig: FlowbiteTableConfig = {
  baseTheme: flowbiteTableTheme,
  color: 'default',
  striped: false,
  customTheme: {},
};

export const FlowbiteTableConfigToken = new InjectionToken<FlowbiteTableConfig>(
  'FlowbiteTableConfigToken'
);

/**
 * Provide the default Table configuration
 * @param config The Table configuration
 * @returns The provider
 */
export const provideFlowbiteTableConfig = (config: Partial<FlowbiteTableConfig>): Provider[] => [
  {
    provide: FlowbiteTableConfigToken,
    useValue: { ...defaultFlowbiteTableConfig, ...config },
  },
];

/**
 * Inject the Table configuration
 * @see {@link defaultFlowbiteTableConfig}
 * @returns The configuration
 */
export const injectFlowbiteTableConfig = (): FlowbiteTableConfig =>
  inject(FlowbiteTableConfigToken, { optional: true }) ?? defaultFlowbiteTableConfig;
