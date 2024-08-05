import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-indicator-default',
  standalone: true,
  imports: [IndicatorComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/indicator/default.component.html',
})
export class FlowbiteFrameIndicatorDefaultComponent {}
