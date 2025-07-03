import { Alert, AlertButton } from 'flowbite-angular/alert';
import { Icon } from 'flowbite-angular/icon';
import { close } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [Alert, Icon, AlertButton],
  providers: [provideIcons({ close })],
  templateUrl: './_dismissable.component.html',
  host: {
    class: 'flex flex-wrap flex-col gap-3 p-6',
  },
})
export class FlowbiteDismissableComponent {
  onDismiss(): void {
    alert('Alert has been dismissed');
  }
}
