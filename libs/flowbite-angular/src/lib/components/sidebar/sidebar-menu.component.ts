import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import { SidebarItemGroupComponent } from './sidebar-item-group.component';
import { SidebarItemComponent } from './sidebar-item.component';
import type { SidebarMenuClass, SidebarMenuTheme } from './sidebar-menu.theme';
import { SidebarMenuThemeService } from './sidebar-menu.theme.service';
import { SidebarComponent } from './sidebar.component';
import type { SidebarColors } from './sidebar.theme';

import { Component, contentChildren, inject, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-menu',
  template: '<ng-content />',
})
export class SidebarMenuComponent extends BaseComponent<SidebarMenuClass> {
  public readonly themeService = inject(SidebarMenuThemeService);
  public readonly sidebarComponent = inject(SidebarComponent);
  public readonly sidebarItemGroupChildren = contentChildren(SidebarItemGroupComponent);
  public readonly sidebarItemChildren = contentChildren(SidebarItemComponent);

  //#region properties
  public color = input<keyof SidebarColors>(this.sidebarComponent.color());
  public customStyle = input<DeepPartial<SidebarMenuTheme>>({});
  //#endregion

  public override fetchClass(): SidebarMenuClass {
    return this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.sidebarComponent.stateService.select('isOpen')()),
      color: this.color(),
      displayMode: this.sidebarComponent.stateService.select('displayMode')(),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.sidebarItemChildren().length === 0 && this.sidebarItemGroupChildren().length === 0) {
      throw new Error('No SidebarItemComponent/SidebarItemGroupComponent available');
    }
  }

  public closeAll(): void {
    this.sidebarItemGroupChildren().forEach((x) => x.toggleVisibility(false));
  }
}
