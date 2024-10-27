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
  template: `
    <flowbite-sidebar [isOpen]="true" class="min-h-screen">
      <flowbite-sidebar-menu>
        <flowbite-sidebar-item>Dashboard</flowbite-sidebar-item>
        <flowbite-sidebar-item-group title="E-commerce">
          <flowbite-sidebar-item>Products</flowbite-sidebar-item>
          <flowbite-sidebar-item>Billing</flowbite-sidebar-item>
          <flowbite-sidebar-item>Invoice</flowbite-sidebar-item>
        </flowbite-sidebar-item-group>
        <flowbite-sidebar-item>Kanban</flowbite-sidebar-item>
        <flowbite-sidebar-item>Inbox</flowbite-sidebar-item>
        <flowbite-sidebar-item>Users</flowbite-sidebar-item>
        <flowbite-sidebar-item>Products</flowbite-sidebar-item>
      </flowbite-sidebar-menu>
      <flowbite-sidebar-page-content>Hello world !</flowbite-sidebar-page-content>
    </flowbite-sidebar>
  `,
})
export class FlowbiteMultiLevelComponent {}
