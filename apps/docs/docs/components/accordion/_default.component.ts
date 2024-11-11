import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular/accordion';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-accordion-default',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
  ],
  templateUrl: './_default.component.html',
})
export class FlowbiteDefaultComponent {}
