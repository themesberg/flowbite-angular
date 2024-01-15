import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-dropdown-item',
  template: `
    <li
      class="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <ng-content></ng-content>
    </li>
  `,
})
export class DropdownItemComponent {
  constructor(readonly dropdown: DropdownComponent) {}
}
