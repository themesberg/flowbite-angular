import { flowbiteTableFootTheme, type FlowbiteTableFootTheme } from '../table-foot/theme';

import type { DeepPartial } from 'flowbite-angular';

import type { Provider } from '@angular/core';
import { inject, InjectionToken } from '@angular/core';

export interface FlowbiteTableFootConfig {
  /**
   * The default theme of table-foot
   */
  baseTheme: FlowbiteTableFootTheme;

  /**
   * The custom theme of table-foot
   */
  customTheme: DeepPartial<FlowbiteTableFootTheme>;
}

export const defaultFlowbiteTableFootConfig: FlowbiteTableFootConfig = {
  baseTheme: flowbiteTableFootTheme,
  customTheme: {},
};

export const FlowbiteTableFootConfigToken = new InjectionToken<FlowbiteTableFootConfig>(
  'FlowbiteTableFootConfigToken'
);

/**
 * Provide the default TableFoot configuration
 * @param config The TableFoot configuration
 * @returns The provider
 */
export const provideFlowbiteTableFootConfig = (
  config: Partial<FlowbiteTableFootConfig>
): Provider[] => [
  {
    provide: FlowbiteTableFootConfigToken,
    useValue: { ...defaultFlowbiteTableFootConfig, ...config },
  },
];

/**
 * Inject the TableFoot configuration
 * @see {@link defaultFlowbiteTableFootConfig}
 * @returns The configuration
 */
export const injectFlowbiteTableFootConfig = (): FlowbiteTableFootConfig =>
  inject(FlowbiteTableFootConfigToken, { optional: true }) ?? defaultFlowbiteTableFootConfig;
