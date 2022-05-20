import { Component, Input } from '@angular/core';
import { SidebarService } from '../../services';

@Component({
  selector: 'flowbite-sidebar',
  template: `<aside
    class="h-full"
    [class.w-16]="sidebarService.$collapsed | async"
    [class.w-64]="(sidebarService.$collapsed | async) === false"
  >
    <div
      class="flex h-full flex-col space-y-4 divide-y divide-gray-200 overflow-y-auto bg-white py-4 px-3 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800"
      [class.rounded]="rounded"
      [ngClass]="extraClass"
    >
      <ng-content></ng-content>
    </div>
  </aside>`,
})
export class SidebarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;

  constructor(readonly sidebarService: SidebarService) {}
}
