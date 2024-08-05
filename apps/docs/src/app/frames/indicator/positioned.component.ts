import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-indicator-positioned',
  standalone: true,
  imports: [IndicatorComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/indicator/positioned.component.html',
})
export class FlowbiteFrameIndicatorPositionedComponent {}
