import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { BreadcrumbItemComponent } from './breadcrumb-item.component';

@Component({
  selector: 'flowbite-breadcrumb',
  template: `
    <nav
      [class]="
        'flex ' +
        (solidBackground
          ? 'px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700'
          : '')
      "
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <ng-content></ng-content>
      </ol>
    </nav>
  `,
})
export class BreadcrumbComponent implements AfterViewInit {
  @ContentChildren(BreadcrumbItemComponent)
  items?: QueryList<BreadcrumbItemComponent>;
  @Input() solidBackground = false;

  ngAfterViewInit() {
    if (this.items?.first) {
      this.items.first.setAsRoot();
    }
  }
}
