import type { DeepPartial } from '../../common';
import { AccordionPanelStateService } from '../../services';
import { BaseComponent } from '../base.component';
import * as properties from './accordion-content.theme';
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
  protected readonly accordionPanelStateService = inject(AccordionPanelStateService);

  public override contentClasses = signal<properties.AccordionContentClass>(properties.AccordionContentClassInstance);

  //#region properties
  public customStyle = input<DeepPartial<properties.AccordionContentBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
