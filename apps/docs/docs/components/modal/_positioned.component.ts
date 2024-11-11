import { ButtonComponent } from 'flowbite-angular/button';
import {
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from 'flowbite-angular/modal';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-modal-positioned',
  standalone: true,
  imports: [
    ModalComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ButtonComponent,
  ],
  templateUrl: './_positioned.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbitePositionedComponent {}
