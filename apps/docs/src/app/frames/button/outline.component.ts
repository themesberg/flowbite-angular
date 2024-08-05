import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-outline',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/button/outline.component.html',
})
export class FlowbiteFrameButtonOutlineComponent {}
