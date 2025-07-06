import { Badge, BadgeButton } from 'flowbite-angular/badge';
import { Icon } from 'flowbite-angular/icon';
import { close, infoCircle } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [Badge, Icon, BadgeButton],
  providers: [provideIcons({ infoCircle, close })],
  templateUrl: './_dismiss.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDismissComponent {
  onDismiss(): void {
    alert('Badge has been dismissed');
  }
}
