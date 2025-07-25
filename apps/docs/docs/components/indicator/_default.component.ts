import { Indicator } from 'flowbite-angular/indicator';

import { Component } from '@angular/core';

@Component({
  imports: [Indicator],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
