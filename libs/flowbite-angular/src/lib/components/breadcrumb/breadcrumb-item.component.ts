import * as properties from './breadcrumb-item.theme';
import { BaseComponent } from '../base.component';

import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
})
export class BreadcrumbItemComponent extends BaseComponent implements OnInit {
  @Input() href?: string;
  @Input() customStyle: Partial<properties.BreadcrumbItemBaseTheme> = {};
  @HostBinding('attr.class') hostClass = 'group flex items-center';

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      href: this.href,
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.breadcrumbClass;
    this.contentClasses = {
      content: propertyClass.contentClass,
    };
  }
}
