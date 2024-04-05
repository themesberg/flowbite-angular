import * as properties from './breadcrumb.theme';
import { BaseComponent } from '../base.component';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent extends BaseComponent implements OnInit {
  @Input() customStyle: Partial<properties.BreadcrumbBaseTheme> = {};

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
