import { Component } from '@angular/core';
import { ModalComponent } from './modal.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-modal-footer',
  templateUrl: './modal-footer.component.html',
})
export class ModalFooterComponent {
  constructor(public modal: ModalComponent) {}
}
