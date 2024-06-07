import * as properties from './accordion-title.theme';
import { BaseComponent } from '../base.component';
import { paramNotNull } from '../../utils/param.util';

import {
  AccordionPanelState,
  AccordionState,
} from '../../services/state/accordion.state';
import {
  Component,
  afterNextRender,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { SignalStoreService } from '../../services/signal-store.service';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion-title',
  templateUrl: './accordion-title.component.html',
})
export class AccordionTitleComponent extends BaseComponent {
  protected signalStoreService = inject<
    SignalStoreService<AccordionPanelState>
  >(SignalStoreService<AccordionPanelState>);
  protected signalStoreServiceAccordionState = inject<
    SignalStoreService<AccordionState>
  >(SignalStoreService<AccordionState>);

  protected override contentClasses = signal<properties.AccordionTitleClass>(
    properties.AccordionTitleClassInstance(),
  );
  //#region properties
  protected customStyle = input<Partial<properties.AccordionTitleBaseTheme>>(
    {},
  );
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (paramNotNull(this.customStyle())) {
      const propertyClass = properties.getClass({
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion

  protected toggleVisibility(): void {
    afterNextRender(
      () => {
        effect(
          () => {
            this.signalStoreService.set('isOpen', {
              isOpen: !this.signalStoreService.select('isOpen')(),
            });
          },
          { injector: this.injector },
        );
      },
      { injector: this.injector },
    );
  }
}
