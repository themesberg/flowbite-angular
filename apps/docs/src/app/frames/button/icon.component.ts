import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-icon',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/button/icon.component.html',
})
export class FlowbiteFrameButtonIconComponent {}
