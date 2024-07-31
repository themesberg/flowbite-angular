import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-alert-icon',
  standalone: true,
  imports: [AlertComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-alert
        [icon]="icon"
        color="red">
        <span class="font-medium">Info alert !</span> Change a few things up and try submitting again.
      </flowbite-alert>

      <ng-template #icon>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 20 20"
          class="mr-3 inline h-5 w-5 flex-shrink-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" />
        </svg>
      </ng-template>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameAlertIconComponent {}
