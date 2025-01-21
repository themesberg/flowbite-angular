import { DropdownComponent, DropdownItemComponent } from 'flowbite-angular/dropdown';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-dropdown-default',
  imports: [DropdownComponent, DropdownItemComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
