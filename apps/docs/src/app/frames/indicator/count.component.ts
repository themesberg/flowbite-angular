import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent, IconComponent, IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-indicator-count',
  standalone: true,
  imports: [IndicatorComponent, ButtonComponent, FlowbiteFrameDisplayComponent, IconComponent],
  templateUrl: '../../../assets/examples/indicator/count.component.html',
})
export class FlowbiteFrameIndicatorCountComponent {}
