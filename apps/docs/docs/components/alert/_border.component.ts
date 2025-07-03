import { Alert } from 'flowbite-angular/alert';

import { Component } from '@angular/core';

@Component({
  imports: [Alert],
  templateUrl: './_border.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteBorderComponent {}
