import { Component, Input } from '@angular/core';

@Component({
  selector: 'flowbite-navbar',
  template: ` <nav
    class="border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4"
    [ngClass]="{ rounded, border }"
  >
    <div
      class="mx-auto flex flex-wrap items-center justify-between"
      [ngClass]="{ container: !fluid }"
    >
      <ng-content></ng-content>
    </div>
  </nav>`,
})
export class NavbarComponent {
  @Input() rounded = false;
  @Input() border = false;
  @Input() fluid = false;
}
