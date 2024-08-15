import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import { SidebarItemGroupComponent } from './sidebar-item-group.component';
import { SidebarItemComponent } from './sidebar-item.component';
import type { SidebarMenuClass, SidebarMenuTheme } from './sidebar-menu.theme';
import { SidebarMenuThemeService } from './sidebar-menu.theme.service';
import { SidebarComponent } from './sidebar.component';

import { Component, contentChildren, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-menu',
  template: '<ng-content />',
})
export class SidebarMenuComponent extends BaseComponent {
  public readonly themeService = inject(SidebarMenuThemeService);
  public readonly sidebarComponent = inject(SidebarComponent);
  public readonly sidebarItemGroupChildren = contentChildren(SidebarItemGroupComponent);
  public readonly sidebarItemChildren = contentChildren(SidebarItemComponent);

  public override contentClasses = signal<SidebarMenuClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<SidebarMenuTheme>>({});
  //#endregion

  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.sidebarComponent.stateService.select('isOpen')()),
      displayMode: this.sidebarComponent.stateService.select('displayMode')(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override verify(): void {
    if (this.sidebarItemChildren().length === 0 && this.sidebarItemGroupChildren().length === 0) {
      throw new Error('No SidebarItemComponent/SidebarItemGroupComponent available');
    }
  }
}
