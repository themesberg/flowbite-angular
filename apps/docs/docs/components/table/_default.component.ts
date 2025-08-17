import { Table, TableBody, TableFoot, TableHead } from 'flowbite-angular/table';

import { Component } from '@angular/core';

@Component({
  imports: [Table, TableBody, TableFoot, TableHead],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {
  readonly data = Array.from({ length: 5 }, (_, i) => i++).map((x) => ({
    name: `Product ${x}`,
    qty: x,
    price: x * x,
  }));
}
