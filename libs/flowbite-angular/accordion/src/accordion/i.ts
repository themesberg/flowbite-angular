import type { FlowbiteAccordionTheme } from './theme';
import { flowbiteAccordionTheme } from './theme';

import type { Provider } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const fb_it_accordion = new InjectionToken<FlowbiteAccordionTheme>('fb_it_accordion');

export const fb_it_p_accordion = (customTheme?: FlowbiteAccordionTheme): Provider => ({
  provide: fb_it_accordion,
  useValue: customTheme ?? flowbiteAccordionTheme,
});
