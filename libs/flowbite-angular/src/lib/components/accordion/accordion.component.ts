import * as properties from './accordion.theme';

import { AccordionThemeService } from './accordion.theme.service';
import { BaseComponent } from '../base.component';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { AccordionStateService } from '../../services';
import {
  Component,
  OnInit,
  booleanAttribute,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { DeepPartial } from '../../common';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  templateUrl: './accordion.component.html',
  providers: [
    {
      provide: AccordionStateService,
      useFactory: () => {
        const service = inject(AccordionStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new AccordionStateService();
      },
    },
  ],
})
export class AccordionComponent extends BaseComponent implements OnInit {
  protected override contentClasses = signal<properties.AccordionClass>(
    properties.AccordionClassInstance,
  );

  protected readonly themeService = inject(AccordionThemeService);
  protected readonly accordionStateService: AccordionStateService = inject(
    AccordionStateService,
  );

  //#region properties
  public isFlush = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<DeepPartial<properties.AccordionBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isFlush: booleanToFlowbiteBoolean(
        this.accordionStateService.select('isFlush')(),
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
        this.accordionStateService.set('isFlush', this.isFlush());
      },
      { injector: this.injector, allowSignalWrites: true },
    );
  }
}
