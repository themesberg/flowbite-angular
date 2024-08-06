import type { DeepPartial } from '../../common';
import { AccordionStateService } from '../../services';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import * as properties from './accordion.theme';
import { AccordionThemeService } from './accordion.theme.service';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, inject, input, signal } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/accordion/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion',
  template: `<ng-content />`,
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
  protected readonly themeService = inject(AccordionThemeService);
  protected readonly accordionStateService = inject(AccordionStateService);

  public override contentClasses = signal<properties.AccordionClass>(properties.AccordionClassInstance);

  //#region properties
  public isFlush = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<DeepPartial<properties.AccordionBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isFlush: booleanToFlowbiteBoolean(this.accordionStateService.select('isFlush')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit(): void {
    this.accordionStateService.set('isFlush', this.isFlush());

    super.ngOnInit();
  }
}
