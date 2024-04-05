import * as properties from './breadcrumb.theme';
import { BaseComponent } from '../base.component';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent extends BaseComponent {
  @Input() customStyle: Partial<properties.BreadcrumbBaseTheme> = {};

  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
