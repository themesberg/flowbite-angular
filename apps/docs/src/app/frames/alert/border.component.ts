import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-alert-border',
  standalone: true,
  imports: [AlertComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-alert
        color="yellow"
        hasBorderAccent
        isRounded="false">
        <span class="font-medium">Info alert !</span> Change a few things up and try submitting again.
      </flowbite-alert>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameAlertBorderComponent {}
