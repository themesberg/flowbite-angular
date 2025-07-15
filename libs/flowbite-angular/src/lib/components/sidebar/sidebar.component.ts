import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarPageContentComponent } from './sidebar-page-content.component';
import type { SidebarClass, SidebarColors, SidebarDisplayMode, SidebarTheme } from './sidebar.theme';
import { SidebarThemeService } from './sidebar.theme.service';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, contentChild, inject, model, untracked } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar',
  template: `<ng-content />`,
})
export class SidebarComponent extends BaseComponent<SidebarClass> implements OnInit {
  public readonly themeService = inject(SidebarThemeService);
  public readonly sidebarMenuChild = contentChild(SidebarMenuComponent);
  public readonly sidebarPageContentChild = contentChild(SidebarPageContentComponent);

  //#region properties
  public color = model<keyof SidebarColors>('primary');
  public displayMode = model<keyof SidebarDisplayMode>('push');
  public isOpen = model<boolean>(false);
  public isRounded = model<boolean>(false);
  public customStyle = model<DeepPartial<SidebarTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): SidebarClass {
    return this.themeService.getClasses({
      displayMode: this.displayMode(),
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.sidebarMenuChild() === undefined) {
      throw new Error('No SidebarMenuComponent available');
    }

    if (this.sidebarPageContentChild() === undefined) {
      throw new Error('No SidebarPageContentComponent available');
    }
  }
  //#endregion

  public toggleVisibility(isOpen?: boolean): void {
    if (isOpen === undefined) {
      isOpen = untracked(() => !this.isOpen());
    }

    this.isOpen.set(isOpen);
  }
}
