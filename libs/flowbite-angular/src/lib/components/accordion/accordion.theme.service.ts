import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { AccordionBaseTheme, AccordionClass, AccordionProperties } from './accordion.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ACCORDION_THEME_TOKEN = new InjectionToken<AccordionBaseTheme>('FLOWBITE_ACCORDION_THEME_TOKEN');

export class AccordionThemeService implements FlowbiteThemeService<AccordionProperties> {
  private readonly baseTheme = inject(FLOWBITE_ACCORDION_THEME_TOKEN);

  public getClasses(properties: AccordionProperties): AccordionClass {
    const theme: AccordionBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AccordionClass = {
      rootClass: twMerge(theme.base, theme.isFlush[properties.isFlush], theme.color[properties.color]),
    };

    return output;
  }
}
