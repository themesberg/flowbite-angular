import { FlowbiteButtonComponent } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  imports: [FlowbiteButtonComponent],
  templateUrl: './_outline.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteOutlineComponent {}
