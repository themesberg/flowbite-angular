import { Component, HostBinding, Input } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  selector: 'flowbite-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
})
export class BreadcrumbItemComponent {
  @Input() href?: string;
  @HostBinding('attr.class') hostClass = 'group flex items-center';
}
