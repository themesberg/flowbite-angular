import { ButtonComponent } from 'flowbite-angular/button';
import { IconComponent } from 'flowbite-angular/icon';
import { IndicatorComponent } from 'flowbite-angular/indicator';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-indicator-count',
  standalone: true,
  imports: [IndicatorComponent, ButtonComponent, IconComponent],
  templateUrl: './_count.component.html',
})
export class FlowbiteCountComponent {}
