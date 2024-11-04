import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarPageContentComponent } from './sidebar-page-content.component';
import type {
  SidebarClass,
  SidebarColors,
  SidebarDisplayMode,
  SidebarTheme,
} from './sidebar.theme';
import { SidebarThemeService } from './sidebar.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  model,
  untracked,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent extends BaseComponent<SidebarClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(SidebarThemeService);
  /**
   * The child `SidebarMenuComponent`
   */
  public readonly sidebarMenuChild = contentChild(SidebarMenuComponent);
  /**
   * The child `SidebarPageContentComponent`
   */
  public readonly sidebarPageContentChild = contentChild(SidebarPageContentComponent);

  //#region properties
  /**
   * Set the sidebar color
   *
   * @default primary
   */
  public color = model<keyof SidebarColors>('primary');
  /**
   * Set the sidebar display mode
   *
   * @default push
   */
  public displayMode = model<keyof SidebarDisplayMode>('push');
  /**
   * Set is the sidebar is open
   *
   * @default false
   */
  public isOpen = model<boolean>(false);
  /**
   * Set is the sidebar is rounded
   *
   * @default false
   */
  public isRounded = model<boolean>(false);
  /**
   * Set the custom style for this sidebar
   */
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

  /**
   * Toggle sidebar visibility
   *
   * @param isOpen If provided force isOpen value
   */
  public toggleVisibility(isOpen?: boolean): void {
    if (isOpen === undefined) {
      isOpen = untracked(() => !this.isOpen());
    }

    this.isOpen.set(isOpen);
  }
}
