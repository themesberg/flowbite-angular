import { AccordionPanelComponent } from './accordion-panel.component';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'flowbite-accordion-content',
  templateUrl: './accordion-content.component.html',
})
export class AccordionContentComponent {
  constructor(readonly accordionPanel: AccordionPanelComponent) {}
}
