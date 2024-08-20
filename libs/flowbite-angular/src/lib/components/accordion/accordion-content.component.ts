import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type { AccordionContentClass, AccordionContentTheme } from './accordion-content.theme';
import { AccordionContentThemeService } from './accordion-content.theme.service';
import { AccordionPanelComponent } from './accordion-panel.component';
import type { AccordionColors } from './accordion.theme';

import { NgClass, NgIf } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  template: `
    <ng-container *ngIf="accordionPanelComponent.stateService.select('isOpen')()">
      <ng-content />
    </ng-container>
  `,
})
export class AccordionContentComponent extends BaseComponent {
  public readonly themeService = inject(AccordionContentThemeService);
  public readonly accordionPanelComponent = inject(AccordionPanelComponent);

  public override contentClasses = signal<AccordionContentClass>(createClass({ rootClass: '' }));

  //#region properties
  public color = input<keyof AccordionColors>(this.accordionPanelComponent.color());
  public customStyle = input<DeepPartial<AccordionContentTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.accordionPanelComponent.accordionComponent.stateService.select('color')(),
      isOpen: booleanToFlowbiteBoolean(this.accordionPanelComponent.stateService.select('isOpen')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
