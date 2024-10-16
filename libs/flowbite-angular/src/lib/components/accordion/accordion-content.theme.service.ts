import type { FlowbiteThemeService } from '../../services';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type {
  AccordionContentClass,
  AccordionContentProperties,
  AccordionContentTheme,
} from './accordion-content.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN = new InjectionToken<AccordionContentTheme>(
  'FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN',
);

export class AccordionContentThemeService implements FlowbiteThemeService<AccordionContentProperties> {
  private readonly baseTheme = inject(FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN);

  public getClasses(properties: AccordionContentProperties): AccordionContentClass {
    const theme: AccordionContentTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AccordionContentClass = {
      rootClass: twMerge(theme.root.base, theme.root.color[properties.color], theme.root.isOpen[properties.isOpen]),
    };

    return output;
  }
}
