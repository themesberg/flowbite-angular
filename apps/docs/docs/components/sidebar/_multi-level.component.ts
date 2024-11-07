import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
  SidebarMenuComponent,
  SidebarPageContentComponent,
} from 'flowbite-angular/sidebar';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-sidebar-multi-level',
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarMenuComponent,
    SidebarItemComponent,
    SidebarItemGroupComponent,
    SidebarPageContentComponent,
  ],
  templateUrl: './_multi-level.component.html',
})
export class FlowbiteMultiLevelComponent {}
