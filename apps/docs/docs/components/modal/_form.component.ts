import { ButtonComponent } from 'flowbite-angular/button';
import { ModalBodyComponent, ModalComponent, ModalHeaderComponent } from 'flowbite-angular/modal';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-modal-form',
  imports: [ModalComponent, ModalBodyComponent, ModalHeaderComponent, ButtonComponent],
  templateUrl: './_form.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteFormComponent {}
