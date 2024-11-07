import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular/accordion';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-accordion-color-option',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
  ],
  templateUrl: './_color-option.component.html',
})
export class FlowbiteColorOptionComponent {}
