import { BadgeComponent } from 'flowbite-angular/badge';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-icon',
  imports: [BadgeComponent, IconComponent],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteIconComponent {}
