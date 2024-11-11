import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular/accordion';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-accordion-flush',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
  ],
  templateUrl: './_flush.component.html',
})
export class FlowbiteFlushComponent {}
