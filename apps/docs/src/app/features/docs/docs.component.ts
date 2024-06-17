import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemGroupComponent,
  SidebarToggleComponent,
} from 'flowbite-angular';

@Component({
  selector: 'flowbite-docs',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemGroupComponent,
    SidebarToggleComponent,
  ],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css',
})
export class DocsComponent {}
