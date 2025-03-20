import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
} from 'flowbite-angular/sidebar';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-sidebar-multi-level',
  imports: [SidebarComponent, SidebarItemComponent, SidebarItemGroupComponent],
  templateUrl: './_multi-level.component.html',
  host: {
    class: 'flex flex-row',
  },
})
export class FlowbiteMultiLevelComponent {}
