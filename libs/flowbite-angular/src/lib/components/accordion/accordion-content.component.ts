import type { DeepPartial } from '../../common';
import { AccordionPanelStateService } from '../../services';
import { BaseComponent } from '../base.component';
import * as properties from './accordion-content.theme';
import { AccordionContentThemeService } from './accordion-content.theme.service';

import { NgClass, NgIf } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  templateUrl: './accordion-content.component.html',
})
export class AccordionContentComponent extends BaseComponent {
  public readonly themeService = inject(AccordionContentThemeService);
  public readonly accordionPanelStateService: AccordionPanelStateService = inject(AccordionPanelStateService);

  public override contentClasses = signal<properties.AccordionContentClass>(properties.AccordionContentClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.AccordionContentBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
