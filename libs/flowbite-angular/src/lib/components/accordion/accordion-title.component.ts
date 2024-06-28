import * as properties from './accordion-title.theme';

import {
  AccordionPanelStateService,
  AccordionStateService,
} from '../../services';
import { AccordionTitleThemeService } from './accordion-title.theme.service';
import { BaseComponent } from '../base.component';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { DeepPartial } from '../../common';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion-title',
  templateUrl: './accordion-title.component.html',
})
export class AccordionTitleComponent extends BaseComponent {
  protected override contentClasses = signal<properties.AccordionTitleClass>(
    properties.AccordionTitleClassInstance,
  );

  protected readonly themeService = inject(AccordionTitleThemeService);
  protected readonly accordionPanelStateService: AccordionPanelStateService =
    inject(AccordionPanelStateService);
  protected readonly accordionStateService: AccordionStateService = inject(
    AccordionStateService,
  );

  //#region properties
  public customStyle = input<DeepPartial<properties.AccordionTitleBaseTheme>>(
    {},
  );
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
      isFlush: booleanToFlowbiteBoolean(
        this.accordionStateService.select('isFlush')(),
      ),
      isOpen: booleanToFlowbiteBoolean(
        this.accordionPanelStateService.select('isOpen')(),
      ),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    const isOpen = this.accordionPanelStateService.select('isOpen')();

    this.accordionPanelStateService.set('isOpen', !isOpen);
  }
}
