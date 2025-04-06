import type { FlowbiteButtonTheme } from 'next-flowbite-angular/button';
import { fb_it_p_button } from 'next-flowbite-angular/button';

import type { EnvironmentProviders, Provider } from '@angular/core';
import { makeEnvironmentProviders } from '@angular/core';

export const makeFlowbiteProviders = (themes?: { button: FlowbiteButtonTheme }): Provider[] => [
  fb_it_p_button(themes?.button),
];

export const initFlowbite = (themes?: { button: FlowbiteButtonTheme }): EnvironmentProviders =>
  makeEnvironmentProviders(makeFlowbiteProviders(themes));
