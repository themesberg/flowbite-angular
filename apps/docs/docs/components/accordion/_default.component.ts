import {
  FlowbiteAccordionComponent,
  FlowbiteAccordionItemComponent,
} from 'flowbite-angular/accordion';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteAccordionComponent, FlowbiteAccordionItemComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
