import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { DropdownComponent, DropdownDividerComponent, DropdownItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-dropdown-divider',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent, DropdownDividerComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/dropdown/divider.component.html',
})
export class FlowbiteFrameDropdownDividerComponent {}
