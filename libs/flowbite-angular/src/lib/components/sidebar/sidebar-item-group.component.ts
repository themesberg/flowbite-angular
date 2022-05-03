import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-sidebar-item-group',
  template: ` <ul class="flex flex-col space-y-2">
    <ng-content></ng-content>
  </ul>`,
})
export class SidebarItemGroupComponent {}
