import { BadgeComponent } from 'flowbite-angular/badge';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-icon-only',
  standalone: true,
  imports: [BadgeComponent, IconComponent],
  template: `
    <flowbite-badge [isIconOnly]="true">
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3 w-3" />
    </flowbite-badge>
    <flowbite-badge
      [isIconOnly]="true"
      color="primary">
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3 w-3" />
    </flowbite-badge>
    <flowbite-badge
      [isIconOnly]="true"
      size="sm">
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3.5 w-3.5" />
    </flowbite-badge>
    <flowbite-badge
      [isIconOnly]="true"
      color="primary"
      size="sm">
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3.5 w-3.5" />
    </flowbite-badge>
  `,
})
export class FlowbiteIconOnlyComponent {}
