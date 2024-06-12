import * as properties from './accordion-content.theme';

import { AccordionPanelState } from '../../services/state/accordion.state';
import { BaseComponent } from '../base.component';
import { SignalStoreService } from '../../services/signal-store.service';

import { Component, inject, input, signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  templateUrl: './accordion-content.component.html',
})
export class AccordionContentComponent extends BaseComponent {
  protected accordionPanelSignalStoreService = inject<
    SignalStoreService<AccordionPanelState>
  >(SignalStoreService<AccordionPanelState>);

  protected override contentClasses = signal<properties.AccordionContentClass>(
    properties.AccordionContentClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.AccordionContentBaseTheme>>({});
  //#endregion

  //#region  BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
