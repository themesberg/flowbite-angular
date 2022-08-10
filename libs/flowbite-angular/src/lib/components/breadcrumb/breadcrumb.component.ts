import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-breadcrumb',
  template: `
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center">
        <ng-content></ng-content>
      </ol>
    </nav>
  `,
})
export class BreadcrumbComponent {}
