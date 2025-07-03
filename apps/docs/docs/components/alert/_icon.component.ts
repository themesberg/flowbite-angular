import { Alert, AlertContent } from 'flowbite-angular/alert';
import { Icon } from 'flowbite-angular/icon';
import { infoCircle } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [Alert, Icon, AlertContent],
  providers: [provideIcons({ infoCircle })],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteIconComponent {}
