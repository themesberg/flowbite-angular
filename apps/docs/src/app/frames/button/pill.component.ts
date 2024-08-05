import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-pill',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/button/pill.component.html',
})
export class FlowbiteFrameButtonPillComponent {}
