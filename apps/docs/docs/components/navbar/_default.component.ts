import {
  FlowbiteNavbarBrandComponent,
  FlowbiteNavbarComponent,
  FlowbiteNavbarContentComponent,
  FlowbiteNavbarItemComponent,
  FlowbiteNavbarToggleComponent,
} from 'flowbite-angular/navbar';

import { Component } from '@angular/core';

@Component({
  imports: [
    FlowbiteNavbarBrandComponent,
    FlowbiteNavbarComponent,
    FlowbiteNavbarContentComponent,
    FlowbiteNavbarItemComponent,
    FlowbiteNavbarToggleComponent,
  ],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
