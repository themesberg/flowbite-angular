import {
  DropdownComponent,
  DropdownDividerComponent,
  DropdownItemComponent,
} from 'flowbite-angular/dropdown';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-dropdown-divider',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent, DropdownDividerComponent],
  template: `
    <flowbite-dropdown>
      <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
      <flowbite-dropdown-divider />
      <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
    </flowbite-dropdown>
  `,
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteDividerComponent {}
