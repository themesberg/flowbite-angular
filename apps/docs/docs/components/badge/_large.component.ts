import { BadgeComponent } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-large',
  imports: [BadgeComponent],
  templateUrl: './_large.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteLargeComponent {}
