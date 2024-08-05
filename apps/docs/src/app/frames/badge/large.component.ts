import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-badge-large',
  standalone: true,
  imports: [BadgeComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/badge/large.component.html',
})
export class FlowbiteFrameBadgeLargeComponent {}
