import { ButtonComponent, IconComponent, IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-indicator-count',
  standalone: true,
  imports: [IndicatorComponent, ButtonComponent, IconComponent],
  template: `
    <flowbite-button class="relative">
      <flowbite-icon
        svgIcon="outline:message-dots"
        class="w-5 h-5 mr-1" />
      Messages
      <flowbite-indicator
        hasBorder
        size="xl"
        hasOffset="top-right"
        placement="top-right">
        8
      </flowbite-indicator>
    </flowbite-button>
  `,
})
export class FlowbiteCountComponent {}
