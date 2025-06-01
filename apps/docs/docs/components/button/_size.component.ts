import { FlowbiteButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteButtonComponent],
  templateUrl: './_size.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteSizeComponent {}
