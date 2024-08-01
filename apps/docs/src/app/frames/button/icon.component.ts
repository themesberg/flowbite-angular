import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-icon',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button>
        <svg
          class="mr-2 -ml-1 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        Buy now
      </flowbite-button>
      <flowbite-button>
        Choose plan
        <svg
          aria-hidden="true"
          class="ml-2 -mr-1 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </flowbite-button>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonIconComponent {}
