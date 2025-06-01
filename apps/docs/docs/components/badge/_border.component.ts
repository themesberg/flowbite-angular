import { FlowbiteBadgeComponent } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteBadgeComponent],
  templateUrl: './_border.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteBorderComponent {}
