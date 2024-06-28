import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
  SidebarToggleComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'flowbite-docs',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, SidebarItemComponent, SidebarItemGroupComponent, SidebarToggleComponent],
  templateUrl: './docs.component.html',
})
export class DocsComponent {}
