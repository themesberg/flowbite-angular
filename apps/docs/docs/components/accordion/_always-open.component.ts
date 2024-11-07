import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular/accordion';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-accordion-always-open',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
  ],
  templateUrl: './_always-open.component.html',
})
export class FlowbiteAlwaysOpenComponent {}
