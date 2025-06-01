import {
  FlowbiteNavbarBrandComponent,
  FlowbiteNavbarComponent,
  FlowbiteNavbarContentComponent,
  FlowbiteNavbarItemComponent,
  FlowbiteNavbarToggleComponent,
} from 'flowbite-angular/navbar';
import { FlowbiteSkeletonComponent } from 'flowbite-angular/skeleton';

import { Component } from '@angular/core';

@Component({
  imports: [
    FlowbiteNavbarBrandComponent,
    FlowbiteNavbarComponent,
    FlowbiteNavbarContentComponent,
    FlowbiteNavbarItemComponent,
    FlowbiteNavbarToggleComponent,
    FlowbiteSkeletonComponent,
  ],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3',
  },
})
export class FlowbiteDefaultComponent {}
