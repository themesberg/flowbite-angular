import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
} from 'flowbite-angular/accordion';

import { Component } from '@angular/core';

@Component({
  imports: [Accordion, AccordionItem, AccordionTitle, AccordionContent],
  templateUrl: './_flush.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteFlushComponent {}
