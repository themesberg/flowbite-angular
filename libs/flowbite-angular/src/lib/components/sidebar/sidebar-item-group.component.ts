import * as properties from './sidebar-item-group.theme';
import { BaseComponent } from '../base.component';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar-item-group',
  templateUrl: './sidebar-item-group.component.html',
})
export class SidebarItemGroupComponent extends BaseComponent implements OnInit {
  @Input() customStyle: Partial<properties.SidebarItemGroupBaseTheme> = {};

  ngOnInit(): void {
    this.componentClass = properties.getClasses({
      customStyle: this.customStyle,
    });
  }
}
