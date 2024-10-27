import { ButtonComponent } from 'flowbite-angular/button';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-icon-only',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  template: `
    <flowbite-button>
      <flowbite-icon svgIcon="outline:arrow-right" class="h-5 w-5" />
    </flowbite-button>
    <flowbite-button [isPill]="true">
      <flowbite-icon svgIcon="outline:arrow-right" class="h-5 w-5" />
    </flowbite-button>
    <flowbite-button fill="outline">
      <flowbite-icon svgIcon="outline:arrow-right" class="h-5 w-5" />
    </flowbite-button>
    <flowbite-button fill="outline" [isPill]="true">
      <flowbite-icon svgIcon="outline:arrow-right" class="h-5 w-5" />
    </flowbite-button>
  `,
})
export class FlowbiteIconOnlyComponent {}
