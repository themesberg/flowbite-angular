import { Button } from 'flowbite-angular/button';
import { Icon } from 'flowbite-angular/icon';
import { brain } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [Button, Icon],
  providers: [provideIcons({ brain })],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteIconComponent {}
