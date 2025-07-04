import { BadgeLink } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  imports: [BadgeLink],
  templateUrl: './_link.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteLinkComponent {}
