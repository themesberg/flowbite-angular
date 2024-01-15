import { Component } from '@angular/core';
import { ModalComponent } from './modal.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-modal-footer',
  template: `
    <div
      class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class ModalFooterComponent {
  constructor(public modal: ModalComponent) {}
}
