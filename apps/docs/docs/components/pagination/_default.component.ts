import { FlowbitePaginationComponent } from 'flowbite-angular/pagination';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbitePaginationComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
