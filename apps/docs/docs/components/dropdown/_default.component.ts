import { FlowbiteButtonComponent } from 'flowbite-angular/button';
import {
  FlowbiteDropdownComponent,
  FlowbiteDropdownItemComponent,
} from 'flowbite-angular/dropdown';

import { Component } from '@angular/core';
import { NgpMenuTrigger } from 'ng-primitives/menu';

@Component({
  imports: [
    FlowbiteButtonComponent,
    FlowbiteDropdownComponent,
    FlowbiteDropdownItemComponent,
    NgpMenuTrigger,
  ],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
