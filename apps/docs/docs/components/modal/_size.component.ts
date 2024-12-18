import { ButtonComponent } from 'flowbite-angular/button';
import {
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from 'flowbite-angular/modal';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-modal-size',
  imports: [
    ModalComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ButtonComponent,
  ],
  templateUrl: './_size.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3 justify-around',
  },
})
export class FlowbiteSizeComponent {}
