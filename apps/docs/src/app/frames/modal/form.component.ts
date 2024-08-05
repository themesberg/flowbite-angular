import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent, ModalBodyComponent, ModalComponent, ModalHeaderComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-modal-form',
  standalone: true,
  imports: [ModalComponent, ModalBodyComponent, ModalHeaderComponent, ButtonComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/modal/form.component.html',
})
export class FlowbiteFrameModalFormComponent {}
