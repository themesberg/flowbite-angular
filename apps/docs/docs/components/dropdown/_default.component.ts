import { DropdownComponent, DropdownItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-dropdown-default',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent],
  template: `
    <flowbite-dropdown>
      <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
      <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
    </flowbite-dropdown>
  `,
})
export class FlowbiteDefaultComponent {}
