import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-alert-icon',
  standalone: true,
  imports: [AlertComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/alert/icon.component.html',
})
export class FlowbiteFrameAlertIconComponent {}
