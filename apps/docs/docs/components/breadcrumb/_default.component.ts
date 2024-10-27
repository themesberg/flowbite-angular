import { BreadcrumbComponent, BreadcrumbItemComponent } from 'flowbite-angular/breadcrumb';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-breadcrumb-default',
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent, IconComponent],
  template: `
    <flowbite-breadcrumb>
      <flowbite-breadcrumb-item link="#">
        <flowbite-icon svgIcon="outline:home" class="mr-2 h-4 w-4" />
        Home
      </flowbite-breadcrumb-item>
      <flowbite-breadcrumb-item link="#">Projects</flowbite-breadcrumb-item>
      <flowbite-breadcrumb-item>Flowbite</flowbite-breadcrumb-item>
    </flowbite-breadcrumb>
  `,
})
export class FlowbiteDefaultComponent {}
