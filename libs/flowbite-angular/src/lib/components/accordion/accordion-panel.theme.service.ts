import { AccordionClass } from './accordion.theme';
import {
  AccordionPanelBaseTheme,
  AccordionPanelClass,
  AccordionPanelProperties,
} from './accordion-panel.theme';
import { FlowbiteThemeService } from '../../common';
import { mergeTheme } from '../../utils/merge-theme';

import { InjectionToken, inject } from '@angular/core';
import { twMerge } from 'tailwind-merge';

export const FLOWBITE_ACCORDION_PANEL_THEME_TOKEN =
  new InjectionToken<AccordionPanelBaseTheme>(
    'FLOWBITE_ACCORDION_PANEL_THEME_TOKEN',
  );

export class AccordionPanelThemeService
  implements FlowbiteThemeService<AccordionPanelProperties>
{
  private baseTheme = inject(FLOWBITE_ACCORDION_PANEL_THEME_TOKEN);

  public getClasses(properties: AccordionPanelProperties): AccordionClass {
    const theme: AccordionPanelBaseTheme = mergeTheme(
      this.baseTheme,
      properties.customStyle,
    );

    const output: AccordionPanelClass = {
      rootClass: twMerge(theme.root.base),
    };

    return output;
  }
}
