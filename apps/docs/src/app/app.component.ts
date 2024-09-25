import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent } from "@ng-doc/app";
import { SidebarStateService } from 'flowbite-angular';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
  providers: [SidebarStateService],
})
export class AppComponent {}
