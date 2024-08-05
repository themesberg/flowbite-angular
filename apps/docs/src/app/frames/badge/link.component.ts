import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-badge-link',
  standalone: true,
  imports: [BadgeComponent, FlowbiteFrameDisplayComponent],
  templateUrl: '../../../assets/examples/badge/link.component.html',
})
export class FlowbiteFrameBadgeLinkComponent {}
