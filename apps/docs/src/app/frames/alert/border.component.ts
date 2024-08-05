import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-alert-border',
  standalone: true,
  imports: [AlertComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/alert/border.component.html',
})
export class FlowbiteFrameAlertBorderComponent {}
