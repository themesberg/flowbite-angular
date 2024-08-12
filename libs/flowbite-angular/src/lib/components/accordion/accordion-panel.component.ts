import type { DeepPartial } from '../../common';
import { AccordionPanelStateService } from '../../services/state/accordion.state';
import { createClass } from '../../utils';
import { BaseComponent } from '../base.component';
import type { AccordionPanelBaseTheme, AccordionPanelClass } from './accordion-panel.theme';
import { AccordionPanelThemeService } from './accordion-panel.theme.service';

import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  template: `<ng-content />`,
  providers: [
    {
      provide: AccordionPanelStateService,
      useFactory: () => {
        const service = inject(AccordionPanelStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new AccordionPanelStateService();
      },
    },
  ],
})
export class AccordionPanelComponent extends BaseComponent implements OnInit {
  protected readonly themeService = inject(AccordionPanelThemeService);
  protected readonly accordionPanelStateService = inject(AccordionPanelStateService);

  public override contentClasses = signal<AccordionPanelClass>(createClass({ rootClass: '' }));

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<DeepPartial<AccordionPanelBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit(): void {
    this.accordionPanelStateService.set('isOpen', this.isOpen());

    super.ngOnInit();
  }
}
