import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { AlertComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-alert-additional-content',
  standalone: true,
  imports: [AlertComponent, FlowbiteFrameDisplayComponent, IconComponent],
  templateUrl: '../../../assets/examples/alert/additional-content.component.html',
})
export class FlowbiteFrameAlertAdditionalContentComponent {}
