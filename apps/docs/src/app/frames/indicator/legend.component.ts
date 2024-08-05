import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-indicator-legend',
  standalone: true,
  imports: [IndicatorComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/indicator/legend.component.html',
})
export class FlowbiteFrameIndicatorLegendComponent {}
