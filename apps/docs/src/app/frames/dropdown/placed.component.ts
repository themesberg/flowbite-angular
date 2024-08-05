import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { DropdownComponent, DropdownItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-dropdown-placed',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/dropdown/placed.component.html',
})
export class FlowbiteFrameDropdownPlacedComponent {}
