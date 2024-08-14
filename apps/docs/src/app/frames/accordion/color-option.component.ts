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
  selector: 'flowbite-frame-accordion-color-option',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
    FlowbiteFrameDisplayComponent,
  ],
  templateUrl: '../../../assets/examples/accordion/color-option.component.html',
})
export class FlowbiteFrameAccordionColorOptionComponent {}
