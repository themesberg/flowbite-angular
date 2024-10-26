import { ButtonComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-icon',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  template: `
    <flowbite-button>
      <flowbite-icon svgIcon="outline:cart" class="mr-2 -ml-1 h-5 w-5" />
      Buy now
    </flowbite-button>
    <flowbite-button>
      Choose plan
      <flowbite-icon svgIcon="outline:arrow-right" class="ml-2 -mr-1 h-5 w-5" />
    </flowbite-button>
  `,
})
export class FlowbiteIconComponent {}
