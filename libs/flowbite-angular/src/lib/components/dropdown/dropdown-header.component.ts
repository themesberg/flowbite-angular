import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-dropdown-header',
  templateUrl: './dropdown-header.component.html',
})
export class DropdownHeaderComponent {
  constructor(readonly dropdown: DropdownComponent) {}
}
