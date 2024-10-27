import { DropdownComponent, DropdownItemComponent } from 'flowbite-angular/dropdown';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-dropdown-placed',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent],
  template: `
    <flowbite-dropdown position="top-center" label="Top start">
      <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
    </flowbite-dropdown>
    <flowbite-dropdown position="left-center" label="Left start">
      <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
    </flowbite-dropdown>
    <flowbite-dropdown position="right-center" label="Right end">
      <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
    </flowbite-dropdown>
  `,
})
export class FlowbitePlacedComponent {}
