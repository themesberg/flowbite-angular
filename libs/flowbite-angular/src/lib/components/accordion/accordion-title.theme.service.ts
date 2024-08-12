import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { AccordionTitleBaseTheme, AccordionTitleClass, AccordionTitleProperties } from './accordion-title.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ACCORDION_TITLE_THEME_TOKEN = new InjectionToken<AccordionTitleBaseTheme>(
  'FLOWBITE_ACCORDION_TITLE_THEME_TOKEN',
);

export class AccordionTitleThemeService implements FlowbiteThemeService<AccordionTitleProperties> {
  private readonly baseTheme = inject(FLOWBITE_ACCORDION_TITLE_THEME_TOKEN);

  public getClasses(properties: AccordionTitleProperties): AccordionTitleClass {
    const theme: AccordionTitleBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AccordionTitleClass = {
      rootClass: twMerge(
        theme.base,
        theme.color[properties.color],
        theme.isFlush[properties.isFlush],
        theme.isOpen[properties.isOpen],
      ),
    };

    return output;
  }
}
