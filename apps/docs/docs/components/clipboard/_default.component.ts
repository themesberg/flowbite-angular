import { FlowbiteClipboardComponent } from 'flowbite-angular/clipboard';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteClipboardComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteDefaultComponent {}
