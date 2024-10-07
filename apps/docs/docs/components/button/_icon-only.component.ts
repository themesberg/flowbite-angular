import { ButtonComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-icon-only',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  template: `
    <flowbite-button>
      <flowbite-icon
        svgIcon="outline:arrow-right"
        class="h-5 w-5" />
    </flowbite-button>
    <flowbite-button isPill>
      <flowbite-icon
        svgIcon="outline:arrow-right"
        class="h-5 w-5" />
    </flowbite-button>
    <flowbite-button fill="outline">
      <flowbite-icon
        svgIcon="outline:arrow-right"
        class="h-5 w-5" />
    </flowbite-button>
    <flowbite-button
      fill="outline"
      isPill>
      <flowbite-icon
        svgIcon="outline:arrow-right"
        class="h-5 w-5" />
    </flowbite-button>
  `,
})
export class FlowbiteIconOnlyComponent {}
