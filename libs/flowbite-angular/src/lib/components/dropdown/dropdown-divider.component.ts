import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-dropdown-divider',
  templateUrl: './dropdown-divider.component.html',
})
export class DropdownDividerComponent {
  constructor(readonly dropdown: DropdownComponent) {}
}
