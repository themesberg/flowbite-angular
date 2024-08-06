import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { AlertComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-alert-icon',
  standalone: true,
  imports: [AlertComponent, FlowbiteFrameDisplayComponent, IconComponent],
  templateUrl: '../../../assets/examples/alert/icon.component.html',
})
export class FlowbiteFrameAlertIconComponent {}
