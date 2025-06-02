import {
  FlowbiteAccordionDirective,
  FlowbiteAccordionItemDirective,
} from 'flowbite-angular/accordion';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteAccordionDirective, FlowbiteAccordionItemDirective],
  templateUrl: './_always-open.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteAlwaysOpenComponent {}
