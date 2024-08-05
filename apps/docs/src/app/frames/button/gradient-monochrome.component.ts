import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-gradient-monochrome',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/button/gradient-monochrome.component.html',
})
export class FlowbiteFrameButtonGradientMonochromeComponent {}
