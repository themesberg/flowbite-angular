import { BadgeComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-icon-only',
  standalone: true,
  imports: [BadgeComponent, IconComponent],
  template: `
    <flowbite-badge isIconOnly>
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3 w-3" />
    </flowbite-badge>
    <flowbite-badge
      isIconOnly
      color="primary">
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3 w-3" />
    </flowbite-badge>
    <flowbite-badge
      isIconOnly
      size="sm">
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3.5 w-3.5" />
    </flowbite-badge>
    <flowbite-badge
      isIconOnly
      color="primary"
      size="sm">
      <flowbite-icon
        svgIcon="outline:check"
        class="h-3.5 w-3.5" />
    </flowbite-badge>
  `,
})
export class FlowbiteIconOnlyComponent {}
