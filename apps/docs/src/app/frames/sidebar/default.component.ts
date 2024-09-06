import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
  SidebarMenuComponent,
  SidebarPageContentComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-sidebar-default',
  standalone: true,
  imports: [
    FlowbiteFrameDisplayComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarItemGroupComponent,
    SidebarItemComponent,
    SidebarPageContentComponent,
  ],
  templateUrl: '../../../assets/examples/sidebar/default.component.html',
})
export class FlowbiteFrameSidebarDefaultComponent {}
