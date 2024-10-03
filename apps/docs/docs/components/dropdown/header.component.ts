import { DropdownComponent, DropdownHeaderComponent, DropdownItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-dropdown-header',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent, DropdownHeaderComponent],
  template: `
    <flowbite-dropdown>
      <flowbite-dropdown-header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">bonnie&#64;flowbite.com</span>
      </flowbite-dropdown-header>
      <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
    </flowbite-dropdown>
  `,
})
export class FlowbiteHeaderComponent {}
