import * as properties from './sidebar-item-group.theme';
import { BaseComponent } from '../base.component';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar-item-group',
  templateUrl: './sidebar-item-group.component.html',
})
export class SidebarItemGroupComponent extends BaseComponent {
  @Input() customStyle: Partial<properties.SidebarItemGroupBaseTheme> = {};

  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
