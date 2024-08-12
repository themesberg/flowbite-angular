import type { DeepPartial } from '../../common';
import { AccordionPanelStateService, AccordionStateService } from '../../services';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import type { AccordionContentClass, AccordionContentTheme } from './accordion-content.theme';
import { AccordionContentThemeService } from './accordion-content.theme.service';

import { NgClass, NgIf } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  template: `
    <ng-container *ngIf="accordionPanelStateService.select('isOpen')()">
      <ng-content />
    </ng-container>
  `,
})
export class AccordionContentComponent extends BaseComponent {
  protected readonly themeService = inject(AccordionContentThemeService);
  protected readonly accordionStateService = inject(AccordionStateService);
  protected readonly accordionPanelStateService = inject(AccordionPanelStateService);

  public override contentClasses = signal<AccordionContentClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<AccordionContentTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.accordionStateService.select('color')(),
      isOpen: booleanToFlowbiteBoolean(this.accordionPanelStateService.select('isOpen')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
