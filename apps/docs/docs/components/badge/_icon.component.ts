import { FlowbiteBadgeComponent } from 'flowbite-angular/badge';
import { FlowbiteIconComponent as fic } from 'flowbite-angular/icon';
import { check } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [FlowbiteBadgeComponent, fic],
  providers: [provideIcons({ check })],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteIconComponent {}
