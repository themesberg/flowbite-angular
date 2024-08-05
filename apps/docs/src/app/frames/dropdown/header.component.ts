import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { DropdownComponent, DropdownHeaderComponent, DropdownItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-dropdown-header',
  standalone: true,
  imports: [DropdownComponent, DropdownItemComponent, DropdownHeaderComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/dropdown/header.component.html',
})
export class FlowbiteFrameDropdownHeaderComponent {}
