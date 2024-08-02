import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent, IndicatorComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-indicator-count',
  standalone: true,
  imports: [IndicatorComponent, ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button class="relative">
        <svg
          class="w-5 h-5 mr-1"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Messages
        <flowbite-indicator
          hasBorder
          color="red"
          size="xl"
          placement="top-right">
          <span class="text-white text-xs font-bold">8</span>
        </flowbite-indicator>
      </flowbite-button>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameIndicatorCountComponent {}