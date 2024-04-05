import * as properties from './accordion-content.theme';
import { BaseComponent } from '../base.component';

import { AccordionPanelComponent } from './accordion-panel.component';
import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'flowbite-accordion-content',
  templateUrl: './accordion-content.component.html',
})
export class AccordionContentComponent extends BaseComponent {
  @Input() customStyle: Partial<properties.AccordionContentBaseTheme> = {};

  constructor(readonly accordionPanel: AccordionPanelComponent) {
    super();
  }

  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
