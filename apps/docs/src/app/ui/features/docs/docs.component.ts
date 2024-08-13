import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
  SidebarMenuComponent,
  SidebarPageContentComponent,
  SidebarToggleComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'flowbite-docs',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemGroupComponent,
    SidebarPageContentComponent,
    SidebarMenuComponent,
    SidebarToggleComponent,
  ],
  templateUrl: './docs.component.html',
})
export class DocsComponent {}
