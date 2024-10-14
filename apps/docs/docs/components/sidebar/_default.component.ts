import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
  SidebarMenuComponent,
  SidebarPageContentComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-sidebar-default',
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarMenuComponent,
    SidebarItemGroupComponent,
    SidebarItemComponent,
    SidebarPageContentComponent,
  ],
  template: `
    <flowbite-sidebar
      [isOpen]="true"
      class="min-h-screen">
      <flowbite-sidebar-menu>
        <flowbite-sidebar-item-group
          [isOpen]="true"
          title="Group">
          <flowbite-sidebar-item>Introduction</flowbite-sidebar-item>
        </flowbite-sidebar-item-group>
      </flowbite-sidebar-menu>
      <flowbite-sidebar-page-content>Hello world !</flowbite-sidebar-page-content>
    </flowbite-sidebar>
  `,
})
export class FlowbiteDefaultComponent {}
