import type { FlowbiteButtonTheme } from './theme';
import { flowbiteButtonTheme } from './theme';

import type { Provider } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const fb_it_button = new InjectionToken<FlowbiteButtonTheme>('fb_it_button');

export const fb_it_p_button = (customTheme?: FlowbiteButtonTheme): Provider => ({
  provide: fb_it_button,
  useValue: customTheme ?? flowbiteButtonTheme,
});
