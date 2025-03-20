import { SidebarComponent, SidebarItemComponent } from 'flowbite-angular/sidebar';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-sidebar-default',
  imports: [SidebarComponent, SidebarItemComponent],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-row',
  },
})
export class FlowbiteDefaultComponent {}
