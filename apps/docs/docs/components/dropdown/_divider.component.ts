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
  templateUrl: '_divider.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteDividerComponent {}
