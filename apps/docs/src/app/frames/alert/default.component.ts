import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-alert-default',
  standalone: true,
  imports: [AlertComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/alert/default.component.html',
})
export class FlowbiteFrameAlertDefaultComponent {}
