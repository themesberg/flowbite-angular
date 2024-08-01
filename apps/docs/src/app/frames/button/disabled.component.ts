import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-disabled',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button isDisabled>Disabled button</flowbite-button>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonDisabledComponent {}
