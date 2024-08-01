import { BreadcrumbComponent, BreadcrumbItemComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-breadcrumb-default',
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent],
  template: `
    <flowbite-breadcrumb>
      <flowbite-breadcrumb-item link="#">
        <svg
          class="mr-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Home
      </flowbite-breadcrumb-item>
      <flowbite-breadcrumb-item link="#">Projects</flowbite-breadcrumb-item>
      <flowbite-breadcrumb-item>Flowbite</flowbite-breadcrumb-item>
    </flowbite-breadcrumb>
  `,
})
export class FlowbiteFrameBreadcrumbDefaultComponent {}
