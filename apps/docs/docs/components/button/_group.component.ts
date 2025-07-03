import { Button } from 'flowbite-angular/button';
import { ButtonGroup } from 'flowbite-angular/button-group';

import { Component } from '@angular/core';

@Component({
  imports: [Button, ButtonGroup],
  templateUrl: './_group.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteGroupComponent {}
