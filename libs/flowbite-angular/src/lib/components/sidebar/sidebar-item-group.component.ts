import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-sidebar-item-group',
  template: ` <div class="flex flex-col space-y-2">
    <ng-content></ng-content>
  </div>`,
})
export class SidebarItemGroupComponent {}
