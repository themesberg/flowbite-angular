import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent, ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-label',
  standalone: true,
  imports: [ButtonComponent, BadgeComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/button/label.component.html',
})
export class FlowbiteFrameButtonLabelComponent {}
