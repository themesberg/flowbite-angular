import * as properties from './accordion-title.theme';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';
import { BaseComponent } from '../base.component';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion-title',
  templateUrl: './accordion-title.component.html',
})
export class AccordionTitleComponent extends BaseComponent {
  @Input() customStyle: Partial<properties.AccordionTitleBaseTheme> = {};

  constructor(
    readonly accordion: AccordionComponent,
    readonly accordionPanel: AccordionPanelComponent,
  ) {
    super();
  }

  protected override fetchClass(): void {
    const propertyClass = properties.getClass({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
