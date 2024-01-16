import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-accordion-title',
  templateUrl: './accordion-title.component.html',
})
export class AccordionTitleComponent {
  constructor(
    readonly accordion: AccordionComponent,
    readonly accordionPanel: AccordionPanelComponent,
  ) {}
}
