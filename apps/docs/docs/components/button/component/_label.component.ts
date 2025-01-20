import { BadgeComponent } from 'flowbite-angular/badge';
import { ButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-label',
  imports: [ButtonComponent, BadgeComponent],
  templateUrl: './_label.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteLabelComponent {}
