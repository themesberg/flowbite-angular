import type { DeepPartial } from '../../common/flowbite.type';
import { FlowbiteRouterLinkActiveDirective } from '../../directives/flowbite-router-link-active.directive';
import { FlowbiteRouterLinkDirective } from '../../directives/flowbite-router-link.directive';
import { SanitizeHtmlPipe } from '../../pipes';
import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base-component.directive';
import { SidebarItemGroupComponent } from './sidebar-item-group.component';
import type { SidebarItemClass, SidebarItemTheme } from './sidebar-item.theme';
import { SidebarItemThemeService } from './sidebar-item.theme.service';
import { SidebarMenuComponent } from './sidebar-menu.component';
import type { SidebarColors } from './sidebar.theme';

import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, inject, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, SanitizeHtmlPipe, BadgeComponent],
  selector: 'flowbite-sidebar-item',
  template: `
    <span
      class="flex-shrink-0"
      [innerHTML]="icon()! | sanitizeHtml"
      *ngIf="icon()"></span>
    <span
      [ngClass]="contentClasses().sidebarIconClass"
      [class.ml-3]="icon()">
      <ng-content />
    </span>
    <flowbite-badge *ngIf="label()">{{ label() }}</flowbite-badge>
  `,
  hostDirectives: [
    {
      directive: FlowbiteRouterLinkDirective,
      inputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkInputs,
      outputs: FlowbiteRouterLinkDirective.flowbiteRouterLinkOutputs,
    },
    {
      directive: FlowbiteRouterLinkActiveDirective,
    },
  ],
})
export class SidebarItemComponent extends BaseComponent<SidebarItemClass> {
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective);
  public readonly flowbiteRouterLinkActive = inject(FlowbiteRouterLinkActiveDirective);
  public readonly themeService = inject(SidebarItemThemeService);
  public readonly sidebarItemGroupComponent = inject<SidebarItemGroupComponent | undefined>(SidebarItemGroupComponent, { optional: true });
  public readonly sidebarMenuComponent = inject<SidebarMenuComponent | undefined>(SidebarMenuComponent);

  //#region properties
  public icon = input<string | undefined>(undefined);
  public color = input<keyof SidebarColors>(
    (this.sidebarItemGroupComponent ?? this.sidebarMenuComponent)!.color()
  );
  public label = input<string | undefined>(undefined);
  public customStyle = input<DeepPartial<SidebarItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): SidebarItemClass {
    return this.themeService.getClasses({
      icon: this.icon(),
      color: this.color(),
      label: this.label(),
      customStyle: this.customStyle(),
    });
  }

  public override verify(): void {
    if (this.sidebarMenuComponent === undefined && this.sidebarItemGroupComponent === undefined) {
      throw new Error('No SidebarMenuComponent/SidebarItemGroupComponent available');
    }
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    (this.sidebarMenuComponent || this.sidebarItemGroupComponent?.sidebarMenuComponent)?.closeAll();
    (
      this.sidebarMenuComponent || this.sidebarItemGroupComponent?.sidebarMenuComponent
    )?.sidebarComponent.toggleVisibility(false);
  }
}
