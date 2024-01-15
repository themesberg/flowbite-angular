import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  template: ` <nav
    class="border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4"
    [ngClass]="[rounded ? 'rounded' : '', border ? 'border' : '', extraClass]"
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
  @Input() extraClass = '';
  @Input() rounded = false;
  @Input() border = false;
  @Input() fluid = false;
}
