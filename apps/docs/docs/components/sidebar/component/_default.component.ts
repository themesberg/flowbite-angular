import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarMenuComponent,
  SidebarPageContentComponent,
} from 'flowbite-angular/sidebar';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-sidebar-default',
  imports: [
    SidebarComponent,
    SidebarMenuComponent,
    SidebarItemComponent,
    SidebarPageContentComponent,
  ],
  templateUrl: './_default.component.html',
})
export class FlowbiteDefaultComponent {}
