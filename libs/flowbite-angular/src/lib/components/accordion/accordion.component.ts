import * as properties from './accordion.theme';

import { AccordionState } from '../../services/state/accordion.state';
import { BaseComponent } from '../base.component';
import { SignalStoreService } from '../../services/signal-store.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import {
  Component,
  OnInit,
  booleanAttribute,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  templateUrl: './accordion.component.html',
  providers: [SignalStoreService<AccordionState>],
})
export class AccordionComponent extends BaseComponent implements OnInit {
  protected accordionService = inject<SignalStoreService<AccordionState>>(
    SignalStoreService<AccordionState>,
  );

  protected override contentClasses = signal<properties.AccordionClass>(
    properties.AccordionClassInstance,
  );

  //#region properties
  public isFlush = input<boolean, string | boolean>(true, {
    transform: booleanAttribute,
  });
  public customStyle = input<Partial<properties.AccordionBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      flush: booleanToFlowbiteBoolean(
        this.accordionService.select('isFlush')(),
      ),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit(): void {
    super.ngOnInit();

    effect(
      () => {
        this.accordionService.set('isFlush', this.isFlush());
      },
      { injector: this.injector, allowSignalWrites: true },
    );
  }
}
