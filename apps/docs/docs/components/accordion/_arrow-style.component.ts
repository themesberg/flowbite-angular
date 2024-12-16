import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular/accordion';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-accordion-arrow-style',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
    IconComponent,
  ],
  templateUrl: './_arrow-style.component.html',
})
export class FlowbiteArrowStyleComponent {}
