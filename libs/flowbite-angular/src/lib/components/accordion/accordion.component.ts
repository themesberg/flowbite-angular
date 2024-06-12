import * as properties from './accordion.theme';
import { BaseComponent } from '../base.component';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import { AccordionState } from '../../services/state/accordion.state';
import {
  Component,
  OnInit,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { SignalStoreService } from '../../services/signal-store.service';

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
  protected accordionSignalStoreService = inject<
    SignalStoreService<AccordionState>
  >(SignalStoreService<AccordionState>);

  protected override contentClasses = signal<properties.AccordionClass>(
    properties.AccordionClassInstance(),
  );

  //#region properties
  public isFlush = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<Partial<properties.AccordionBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (
      paramNotNull(
        booleanToFlowbiteBoolean(
          this.accordionSignalStoreService.select('isFlush')(),
        ),
        this.customStyle(),
      )
    ) {
      const propertyClass = properties.getClasses({
        flush: booleanToFlowbiteBoolean(
          this.accordionSignalStoreService.select('isFlush')(),
        ),
        customStyle: this.customStyle(),
      });

      this.contentClasses.set(propertyClass);
    }
  }
  //#endregion

  public override ngOnInit(): void {
    this.accordionSignalStoreService.set('isFlush', this.isFlush());

    super.ngOnInit();
  }
}
