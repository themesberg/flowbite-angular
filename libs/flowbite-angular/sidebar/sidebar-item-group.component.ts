import { IconComponent, IconRegistry } from '../icon';
import type { SidebarItemGroupClass, SidebarItemGroupTheme } from './sidebar-item-group.theme';
import { SidebarItemGroupThemeService } from './sidebar-item-group.theme.service';
import { SidebarItemComponent } from './sidebar-item.component';
import { SidebarMenuComponent } from './sidebar-menu.component';
import type { SidebarColors } from './sidebar.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { CHEVRON_DOWN_SVG_ICON } from 'flowbite-angular/utils';

import { NgClass, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, contentChildren, inject, model, untracked } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgClass, NgIf, IconComponent],
  selector: 'flowbite-sidebar-item-group',
  template: `
    <span [class]="contentClasses().spanClass" (click)="onSpanClick()">
      <h4>{{ title() }}</h4>
      <flowbite-icon
        svgIcon="flowbite-angular:chevron-down"
        class="h-6 w-6 shrink-0 duration-200"
        [class.rotate-180]="!isOpen()" />
    </span>
    <ng-content *ngIf="isOpen()" />
  `,
})
export class SidebarItemGroupComponent
  extends BaseComponent<SidebarItemGroupClass>
  implements OnInit
{
  public readonly themeService = inject(SidebarItemGroupThemeService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);
  public readonly sidebarMenuComponent = inject(SidebarMenuComponent);
  public readonly sidebarItemChildren = contentChildren(SidebarItemComponent);

  //#region properties
  public isOpen = model<boolean>(
    this.sidebarItemChildren().some((x) => x.flowbiteRouterLinkActive?.isActive() ?? false)
  );
  public color = model<keyof SidebarColors>(this.sidebarMenuComponent.color());
  public title = model.required<string>();
  public customStyle = model<DeepPartial<SidebarItemGroupTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): SidebarItemGroupClass {
    return this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.sidebarItemChildren().length === 0) {
      throw new Error('No SidebarItemComponent available');
    }
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON)
    );
  }
  //#endregion

  public onSpanClick(): void {
    this.toggleVisibility();
  }

  public toggleVisibility(isOpen?: boolean): void {
    if (isOpen === undefined) {
      isOpen = untracked(() => !this.isOpen());
    }

    this.isOpen.set(isOpen);
  }
}
