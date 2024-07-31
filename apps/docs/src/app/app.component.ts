import { SidebarStateService } from 'flowbite-angular';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'flowbite-root',
  templateUrl: './app.component.html',
  providers: [SidebarStateService],
})
export class AppComponent {}
