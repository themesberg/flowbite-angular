import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-badge-default',
  standalone: true,
  imports: [BadgeComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/badge/default.component.html',
})
export class FlowbiteFrameBadgeDefaultComponent {}
