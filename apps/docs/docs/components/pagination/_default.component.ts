import { Pagination } from 'flowbite-angular/pagination';

import { Component, signal } from '@angular/core';

@Component({
  imports: [Pagination],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {
  readonly page = signal<number>(1);
}
