import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-disabled',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/button/disabled.component.html',
})
export class FlowbiteFrameButtonDisabledComponent {}
