import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { DropdownComponent, DropdownDividerComponent, DropdownItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-dropdown-divider',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent, DropdownDividerComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-dropdown>
        <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
        <flowbite-dropdown-divider />
        <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
        <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
      </flowbite-dropdown>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameDropdownDividerComponent {}
