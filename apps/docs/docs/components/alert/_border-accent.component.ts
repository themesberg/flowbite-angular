import { Alert, AlertContent } from 'flowbite-angular/alert';

import { Component } from '@angular/core';

@Component({
  imports: [Alert, AlertContent],
  templateUrl: './_border-accent.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteBorderAccentComponent {}
