import { BadgeComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-icon',
  standalone: true,
  imports: [BadgeComponent, IconComponent],
  template: `
    <flowbite-badge>
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3 w-3" />
      2 minutes ago
    </flowbite-badge>
    <flowbite-badge color="primary">
      <flowbite-icon
        svgIcon="outline:clock"
        class="h-3 w-3" />
      3 days ago
    </flowbite-badge>
  `,
})
export class FlowbiteIconComponent {}
