import { DropdownComponent, DropdownItemComponent } from 'flowbite-angular/dropdown';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-dropdown-placed',
  imports: [DropdownComponent, DropdownItemComponent],
  templateUrl: './_placed.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3 justify-around',
  },
})
export class FlowbitePlacedComponent {}
