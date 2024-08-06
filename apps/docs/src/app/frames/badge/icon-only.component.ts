import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { BadgeComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-badge-icon-only',
  standalone: true,
  imports: [BadgeComponent, FlowbiteFrameDisplayComponent, IconComponent],
  templateUrl: '../../../assets/examples/badge/icon-only.component.html',
})
export class FlowbiteFrameBadgeIconOnlyComponent {}
