import { Component } from '@angular/core';
import { ModalComponent } from './modal.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-modal-header',
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent {
  constructor(readonly modal: ModalComponent) {}
}
