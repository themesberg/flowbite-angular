import { AlertComponent } from 'flowbite-angular/alert';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-alert-icon',
  imports: [AlertComponent, IconComponent],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3',
  },
})
export class FlowbiteIconComponent {}
