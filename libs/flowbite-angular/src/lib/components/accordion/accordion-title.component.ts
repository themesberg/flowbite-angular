import type { DeepPartial } from '../../common';
import { AccordionPanelStateService, AccordionStateService } from '../../services';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import * as properties from './accordion-title.theme';
import { AccordionTitleThemeService } from './accordion-title.theme.service';

import { NgClass } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion-title',
  templateUrl: './accordion-title.component.html',
})
export class AccordionTitleComponent extends BaseComponent {
  public readonly themeService = inject(AccordionTitleThemeService);
  public readonly accordionPanelStateService: AccordionPanelStateService = inject(AccordionPanelStateService);
  public readonly accordionStateService: AccordionStateService = inject(AccordionStateService);

  public override contentClasses = signal<properties.AccordionTitleClass>(properties.AccordionTitleClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.AccordionTitleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
      isFlush: booleanToFlowbiteBoolean(this.accordionStateService.select('isFlush')()),
      isOpen: booleanToFlowbiteBoolean(this.accordionPanelStateService.select('isOpen')()),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  public onClick(): void {
    const isOpen = this.accordionPanelStateService.select('isOpen')();

    this.accordionPanelStateService.set('isOpen', !isOpen);
  }
}
