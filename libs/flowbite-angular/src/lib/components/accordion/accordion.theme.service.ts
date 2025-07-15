import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { AccordionClass, AccordionProperties, AccordionTheme } from './accordion.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ACCORDION_THEME_TOKEN = new InjectionToken<AccordionTheme>('FLOWBITE_ACCORDION_THEME_TOKEN');

export class AccordionThemeService implements FlowbiteThemeService<AccordionProperties> {
  private readonly baseTheme = inject(FLOWBITE_ACCORDION_THEME_TOKEN);

  public getClasses(properties: AccordionProperties): AccordionClass {
    const theme: AccordionTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AccordionClass = {
      rootClass: twMerge(theme.root.base, theme.root.isFlush[properties.isFlush], theme.root.color[properties.color]),
    };

    return output;
  }
}
