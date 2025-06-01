import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { cart } from 'flowbite-angular/icon/solid/e-commerce';
import { chartPie, drawSquare, inbox } from 'flowbite-angular/icon/solid/general';
import { users } from 'flowbite-angular/icon/solid/user';
import {
  FlowbiteSidebarComponent,
  FlowbiteSidebarContentComponent,
  FlowbiteSidebarItemComponent,
  FlowbiteSidebarToggleComponent,
} from 'flowbite-angular/sidebar';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [
    FlowbiteSidebarComponent,
    FlowbiteSidebarContentComponent,
    FlowbiteSidebarItemComponent,
    FlowbiteSidebarToggleComponent,
    FlowbiteIconComponent,
  ],
  templateUrl: './_default.component.html',
  providers: [provideIcons({ chartPie, inbox, users, cart, drawSquare })],
  host: {
    class: 'flex flex-row relative',
  },
})
export class FlowbiteDefaultComponent {}
