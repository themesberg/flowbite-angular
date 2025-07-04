import { Badge } from 'flowbite-angular/badge';

import { Component } from '@angular/core';

@Component({
  imports: [Badge],
  templateUrl: './_border.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteBorderComponent {}
