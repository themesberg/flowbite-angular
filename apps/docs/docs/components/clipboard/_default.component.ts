import { Clipboard } from 'flowbite-angular/clipboard';

import { Component } from '@angular/core';

@Component({
  imports: [Clipboard],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
