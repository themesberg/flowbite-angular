import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-dropdown-item',
  templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent {
  constructor(readonly dropdown: DropdownComponent) {}
}
