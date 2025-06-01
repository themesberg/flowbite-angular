import { FlowbiteButtonComponent } from 'flowbite-angular/button';
import {
  FlowbiteModalComponent,
  FlowbiteModalContentComponent,
  FlowbiteModalFooterComponent,
  FlowbiteModalHeaderComponent,
  FlowbiteModalOverlayComponent,
} from 'flowbite-angular/modal';

import { Component } from '@angular/core';
import { NgpDialogTrigger } from 'ng-primitives/dialog';

@Component({
  imports: [
    FlowbiteButtonComponent,
    NgpDialogTrigger,
    FlowbiteModalComponent,
    FlowbiteModalContentComponent,
    FlowbiteModalFooterComponent,
    FlowbiteModalHeaderComponent,
    FlowbiteModalOverlayComponent,
  ],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
