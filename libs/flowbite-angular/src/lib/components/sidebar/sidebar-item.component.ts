import type { DeepPartial } from '../../common/flowbite.type';
import { FlowbiteRouterLinkActiveDirective } from '../../directives/flowbite-router-link-active.directive';
import { FlowbiteRouterLinkDirective } from '../../directives/flowbite-router-link.directive';
import { SanitizeHtmlPipe } from '../../pipes';
import { createClass } from '../../utils';
import { BadgeComponent } from '../badge';
import { BaseComponent } from '../base-component.directive';
import { SidebarItemGroupComponent } from './sidebar-item-group.component';
import type { SidebarItemClass, SidebarItemTheme } from './sidebar-item.theme';
import { SidebarItemThemeService } from './sidebar-item.theme.service';
import { SidebarMenuComponent } from './sidebar-menu.component';
import type { SidebarColors } from './sidebar.theme';

import { NgClass, NgIf } from '@angular/common';
import {
  Component,
  computed,
  HostListener,
  inject,
  input,
  signal
} from '@angular/core';

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
export class SidebarItemComponent extends BaseComponent {
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective);
  public readonly flowbiteRouterLinkActive = inject(FlowbiteRouterLinkActiveDirective);
  public readonly themeService = inject(SidebarItemThemeService);
  public readonly sidebarItemGroupComponent = inject<SidebarItemGroupComponent | undefined>(SidebarItemGroupComponent, { optional: true });
  public readonly sidebarMenuComponent = inject<SidebarMenuComponent | undefined>(SidebarMenuComponent);

  public override contentClasses = signal<SidebarItemClass>(createClass({ rootClass: '', sidebarIconClass: '' }));

  //#region properties
  public icon = input<string | undefined>(undefined);
  public color = input<keyof SidebarColors>();
  public label = input<string | undefined>(undefined);
  public customStyle = input<DeepPartial<SidebarItemTheme>>({});

  // With a computed, it's possible to dynamically
  // change the color (even if the SidebarMenuComponent's
  // or SidebarItemGroupComponent's color has changed)
  private realColor = computed(() => {
    // If the color is set directly on the
    // SidebarItemComponent we just return it as is
    if (this.color() !== undefined) {
      return this.color() as keyof SidebarColors;
    }

    // If the component is inside a SidebarItemGroupComponent
    // we return it's color
    if (this.sidebarItemGroupComponent) {
      return this.sidebarItemGroupComponent.color();
    }

    // Since a SidebarMenuComponent is required, we return
    // its color if none of the above conditions are met
    return this.sidebarMenuComponent?.color() ?? 'primary';
  });
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      icon: this.icon(),
      color: this.realColor(),
      label: this.label(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override verify(): void {
    if (this.sidebarMenuComponent === undefined) {
      throw new Error('No SidebarMenuComponent available');
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
