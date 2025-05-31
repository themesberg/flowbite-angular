import { FlowbiteAlertComponent } from 'flowbite-angular/alert';
import { FlowbiteIconButtonDirective } from 'flowbite-angular/button';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { close } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [FlowbiteAlertComponent, FlowbiteIconComponent, FlowbiteIconButtonDirective],
  providers: [provideIcons({ close })],
  templateUrl: './_dismissable.component.html',
  host: {
    class: 'flex flex wrap flex-col gap-3',
  },
})
export class FlowbiteDismissableComponent {
  onDismiss(): void {
    alert('Alert has been dismissed');
  }
}
