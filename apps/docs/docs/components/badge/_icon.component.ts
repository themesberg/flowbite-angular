import { Badge } from 'flowbite-angular/badge';
import { Icon } from 'flowbite-angular/icon';
import { check } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [Badge, Icon],
  providers: [provideIcons({ check })],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteIconComponent {}
