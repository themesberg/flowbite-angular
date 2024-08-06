import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-badge-icon',
  standalone: true,
  imports: [BadgeComponent, FlowbiteFrameDisplayComponent, IconComponent],
  templateUrl: '../../../assets/examples/badge/icon.component.html',
})
export class FlowbiteFrameBadgeIconComponent {}
