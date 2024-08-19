import type { DeepPartial } from '../../common/flowbite.type';
import { SanitizeHtmlPipe } from '../../pipes';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { routerLinkActiveInputs, routerLinkInputs } from '../../utils/directive.input.util';
import { routerLinkActiveOutputs, routerLinkOutputs } from '../../utils/directive.output.util';
import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base-component.directive';
import { SidebarItemGroupComponent } from './sidebar-item-group.component';
import type { SidebarItemClass, SidebarItemTheme } from './sidebar-item.theme';
import { SidebarItemThemeService } from './sidebar-item.theme.service';
import { SidebarMenuComponent } from './sidebar-menu.component';

import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, RouterLinkActive, SanitizeHtmlPipe, BadgeComponent],
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
      directive: RouterLink,
      inputs: routerLinkInputs,
      outputs: routerLinkOutputs,
    },
    {
      directive: RouterLinkActive,
      inputs: routerLinkActiveInputs,
      outputs: routerLinkActiveOutputs,
    },
  ],
})
export class SidebarItemComponent extends BaseComponent {
  public readonly routerLink = inject(RouterLink);
  public readonly routerLinkActive = inject(RouterLinkActive);
  public readonly themeService = inject(SidebarItemThemeService);
  public readonly sidebarItemGroupComponent = inject<SidebarItemGroupComponent | undefined>(SidebarItemGroupComponent);
  public readonly sidebarMenuComponent = inject<SidebarMenuComponent | undefined>(SidebarMenuComponent);

  public override contentClasses = signal<SidebarItemClass>(createClass({ rootClass: '', sidebarIconClass: '' }));

  //#region properties
  public icon = input<string | undefined>(undefined);
  public label = input<string | undefined>(undefined);
  public customStyle = input<DeepPartial<SidebarItemTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      icon: this.icon(),
      isActive: booleanToFlowbiteBoolean(false),
      link: this.routerLink.urlTree,
      label: this.label(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override verify(): void {
    if (this.sidebarMenuComponent === undefined && this.sidebarItemGroupComponent === undefined) {
      throw new Error('No SidebarMenuComponent/SidebarItemGroupComponent available');
    }
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    (
      this.sidebarMenuComponent || this.sidebarItemGroupComponent?.sidebarMenuComponent
    )?.sidebarComponent.stateService.set('isOpen', false);
  }
}
