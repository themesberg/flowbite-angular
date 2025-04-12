import type {
  FlowbiteAccordionItemTheme,
  FlowbiteAccordionTheme,
} from 'flowbite-angular/accordion';
import { fb_it_p_accordion, fb_it_p_accordion_item } from 'flowbite-angular/accordion';
import type { FlowbiteButtonTheme } from 'flowbite-angular/button';
import { fb_it_p_button } from 'flowbite-angular/button';

import type { EnvironmentProviders, Provider } from '@angular/core';
import { makeEnvironmentProviders } from '@angular/core';

export interface themes {
  button: FlowbiteButtonTheme;
  accordion: FlowbiteAccordionTheme;
  accordionItem: FlowbiteAccordionItemTheme;
}

export const makeFlowbiteProviders = (themes?: themes): Provider[] => [
  fb_it_p_button(themes?.button),
  fb_it_p_accordion(themes?.accordion),
  fb_it_p_accordion_item(themes?.accordionItem),
];

export const initFlowbite = (themes?: themes): EnvironmentProviders =>
  makeEnvironmentProviders(makeFlowbiteProviders(themes));
