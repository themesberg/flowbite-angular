import 'reflect-metadata';

import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-accordion-always-open',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
    FlowbiteFrameDisplayComponent,
  ],
  templateUrl: '../../../assets/examples/accordion/always-open.component.html',
})
export class FlowbiteFrameAccordionAlwaysOpenComponent {}
