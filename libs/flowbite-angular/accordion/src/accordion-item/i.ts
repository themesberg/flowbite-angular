import type { FlowbiteAccordionItemTheme } from './theme';
import { flowbiteAccordionItemTheme } from './theme';

import type { Provider } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const fb_it_accordion_item = new InjectionToken<FlowbiteAccordionItemTheme>(
  'fb_it_accordion'
);

export const fb_it_p_accordion_item = (customTheme?: FlowbiteAccordionItemTheme): Provider => ({
  provide: fb_it_accordion_item,
  useValue: customTheme ?? flowbiteAccordionItemTheme,
});
