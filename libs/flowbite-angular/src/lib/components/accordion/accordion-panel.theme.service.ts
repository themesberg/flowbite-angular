import type { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/theme/merge-theme';
import type { AccordionPanelBaseTheme, AccordionPanelClass, AccordionPanelProperties } from './accordion-panel.theme';
import type { AccordionClass } from './accordion.theme';

import { inject, InjectionToken } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ACCORDION_PANEL_THEME_TOKEN = new InjectionToken<AccordionPanelBaseTheme>(
  'FLOWBITE_ACCORDION_PANEL_THEME_TOKEN',
);

export class AccordionPanelThemeService implements FlowbiteThemeService<AccordionPanelProperties> {
  private readonly baseTheme = inject(FLOWBITE_ACCORDION_PANEL_THEME_TOKEN);

  public getClasses(properties: AccordionPanelProperties): AccordionClass {
    const theme: AccordionPanelBaseTheme = mergeTheme(this.baseTheme, properties.customStyle);

    const output: AccordionPanelClass = {
      rootClass: twMerge(theme.base),
    };

    return output;
  }
}
