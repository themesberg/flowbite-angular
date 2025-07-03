import { Button } from 'flowbite-angular/button';

import { Component } from '@angular/core';

@Component({
  imports: [Button],
  templateUrl: './_outline.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteOutlineComponent {}
