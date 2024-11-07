import { BreadcrumbComponent, BreadcrumbItemComponent } from 'flowbite-angular/breadcrumb';
import { IconComponent } from 'flowbite-angular/icon';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-breadcrumb-default',
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent, IconComponent],
  templateUrl: './_default.component.html',
})
export class FlowbiteDefaultComponent {}
