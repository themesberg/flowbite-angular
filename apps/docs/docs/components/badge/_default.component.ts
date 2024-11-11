import { BadgeComponent } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-badge-default',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
