import * as properties from './sidebar.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { SidebarService } from '../../services';

import { AsyncPipe, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass, AsyncPipe],
  selector: 'flowbite-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent extends BaseComponent implements OnInit {
  @Input() rounded: keyof FlowbiteBoolean = 'disabled';
  @Input() customStyle: Partial<properties.SidebarBaseTheme> = {};

  constructor(readonly sidebarService: SidebarService) {
    super();
  }

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      rounded: this.rounded,
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.sidebarClass;
    this.contentClasses = {
      sidebarContent: propertyClass.sidebarContentClass,
    };
  }
}
