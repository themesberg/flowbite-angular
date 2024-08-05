import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-alert-dismissable',
  standalone: true,
  imports: [AlertComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/alert/dismissable.component.html',
})
export class FlowbiteFrameAlertDismissableComponent {
  onDismiss = () => alert('Alert dismissed!');
}
