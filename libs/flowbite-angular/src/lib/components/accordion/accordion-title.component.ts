import * as properties from './accordion-title.theme';

import {
  AccordionPanelState,
  AccordionState,
} from '../../services/state/accordion.state';
import { BaseComponent } from '../base.component';
import { SignalStoreService } from '../../services/signal-store.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion-title',
  templateUrl: './accordion-title.component.html',
})
export class AccordionTitleComponent extends BaseComponent {
  protected accordionPanelSignalStoreService = inject<
    SignalStoreService<AccordionPanelState>
  >(SignalStoreService<AccordionPanelState>);
  protected accordionSignalStoreService = inject<
    SignalStoreService<AccordionState>
  >(SignalStoreService<AccordionState>);

  protected override contentClasses = signal<properties.AccordionTitleClass>(
    properties.AccordionTitleClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.AccordionTitleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = properties.getClass({
      customStyle: this.customStyle(),
      isFlush: booleanToFlowbiteBoolean(
        this.accordionSignalStoreService.select('isFlush')(),
      ),
      isOpen: booleanToFlowbiteBoolean(
        this.accordionPanelSignalStoreService.select('isOpen')(),
      ),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    const isOpen = this.accordionPanelSignalStoreService.select('isOpen')();

    this.accordionPanelSignalStoreService.set('isOpen', !isOpen);
  }
}
