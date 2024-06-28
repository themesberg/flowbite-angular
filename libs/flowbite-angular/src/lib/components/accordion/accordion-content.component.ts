import * as properties from './accordion-content.theme';

import { AccordionContentThemeService } from './accordion-content.theme.service';
import { AccordionPanelStateService } from '../../services';
import { BaseComponent } from '../base.component';

import { Component, inject, input, signal } from '@angular/core';
import { DeepPartial } from '../../common';
import { NgClass, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  templateUrl: './accordion-content.component.html',
})
export class AccordionContentComponent extends BaseComponent {
  protected override contentClasses = signal<properties.AccordionContentClass>(
    properties.AccordionContentClassInstance,
  );

  protected readonly themeService = inject(AccordionContentThemeService);
  protected readonly accordionPanelStateService: AccordionPanelStateService =
    inject(AccordionPanelStateService);

  //#region properties
  public customStyle = input<DeepPartial<properties.AccordionContentBaseTheme>>(
    {},
  );
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
