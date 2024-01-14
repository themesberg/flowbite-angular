import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-dropdown-header',
  template: `
    <div class="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
      <ng-content></ng-content>
    </div>
    <div class="my-1 h-px bg-gray-100 dark:bg-gray-600"></div>
  `,
})
export class DropdownHeaderComponent {
  constructor(readonly dropdown: DropdownComponent) {}
}
