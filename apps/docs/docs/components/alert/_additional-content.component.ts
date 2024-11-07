import { AlertComponent } from 'flowbite-angular/alert';
import { ButtonComponent } from 'flowbite-angular/button';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-alert-additional-content',
  standalone: true,
  imports: [AlertComponent, IconComponent, ButtonComponent],
  templateUrl: './_additional-content.component.html',
  host: {
    class: 'flex flex wrap flex-col gap-3',
  },
})
export class FlowbiteAdditionalContentComponent {}
