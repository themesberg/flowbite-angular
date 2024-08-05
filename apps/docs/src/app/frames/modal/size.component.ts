import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import {
  ButtonComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-modal-size',
  standalone: true,
  imports: [
    ModalComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ButtonComponent,
    FlowbiteFrameDisplayComponent,
  ],
  templateUrl: '../../../assets/examples/modal/size.component.html',
})
export class FlowbiteFrameModalSizeComponent {}
