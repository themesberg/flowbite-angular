import * as properties from './accordion-content.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import { AccordionPanelState } from '../../services/state/accordion.state';
import { Component, inject, input, signal } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { SignalStoreService } from '../../services/signal-store.service';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  templateUrl: './accordion-content.component.html',
})
export class AccordionContentComponent extends BaseComponent {
  protected signalStoreService = inject<
    SignalStoreService<AccordionPanelState>
  >(SignalStoreService<AccordionPanelState>);

  protected override contentClasses = signal<properties.AccordionContentClass>(
    properties.AccordionContentClassInstance(),
  );

  //#region properties
  public customStyle = input<Partial<properties.AccordionContentBaseTheme>>({});
  //#endregion

  //#region  BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle())) {
      const propertyClass = properties.getClasses({
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion
}
