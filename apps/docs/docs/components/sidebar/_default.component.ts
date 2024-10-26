import {
  SidebarComponent,
  SidebarItemComponent,
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
    SidebarItemComponent,
    SidebarPageContentComponent,
  ],
  template: `
    <flowbite-sidebar [isOpen]="true" class="min-h-screen">
      <flowbite-sidebar-menu>
        <flowbite-sidebar-item>Dashboard</flowbite-sidebar-item>
        <flowbite-sidebar-item>Kanban</flowbite-sidebar-item>
        <flowbite-sidebar-item>Inbox</flowbite-sidebar-item>
        <flowbite-sidebar-item>Users</flowbite-sidebar-item>
        <flowbite-sidebar-item>Products</flowbite-sidebar-item>
      </flowbite-sidebar-menu>
      <flowbite-sidebar-page-content>Hello world !</flowbite-sidebar-page-content>
    </flowbite-sidebar>
  `,
})
export class FlowbiteDefaultComponent {}
