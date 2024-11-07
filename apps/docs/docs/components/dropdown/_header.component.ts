import {
  DropdownComponent,
  DropdownHeaderComponent,
  DropdownItemComponent,
} from 'flowbite-angular/dropdown';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-dropdown-header',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent, DropdownHeaderComponent],
  templateUrl: '_header.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteHeaderComponent {}
