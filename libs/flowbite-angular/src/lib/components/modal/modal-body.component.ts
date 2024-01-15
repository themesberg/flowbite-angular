import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-modal-body',
  template: `
    <div class="p-6 space-y-6">
      <ng-content></ng-content>
    </div>
  `,
})
export class ModalBodyComponent {}
