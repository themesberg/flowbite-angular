import { ButtonComponent } from 'flowbite-angular/button';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-button-icon',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex wrap flex-row gap-3',
  },
})
export class FlowbiteIconComponent {}
