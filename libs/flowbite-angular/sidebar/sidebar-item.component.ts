import { SidebarItemGroupComponent } from './sidebar-item-group.component';
import type { SidebarItemClass, SidebarItemTheme } from './sidebar-item.theme';
import { SidebarItemThemeService } from './sidebar-item.theme.service';
import { SidebarMenuComponent } from './sidebar-menu.component';
import type { SidebarColors } from './sidebar.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { BadgeComponent } from 'flowbite-angular/badge';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';
import { FlowbiteRouterLinkActiveDirective } from 'flowbite-angular/router-link-active';
import { SanitizeHtmlPipe } from 'flowbite-angular/sanitize-html';

import { NgClass, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, SanitizeHtmlPipe, BadgeComponent],
  selector: 'flowbite-sidebar-item',
  template: `
    <span class="flex-shrink-0" [innerHTML]="icon()! | sanitizeHtml" *ngIf="icon()"></span>
    <span [ngClass]="contentClasses().sidebarIconClass" [class.ml-3]="icon()">
      <ng-content />
    </span>
    <flowbite-badge *ngIf="label()">{{ label() }}</flowbite-badge>
  `,
  host: {
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent extends BaseComponent<SidebarItemClass> {
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective, { optional: true });
  public readonly flowbiteRouterLinkActive = inject(FlowbiteRouterLinkActiveDirective, {
    optional: true,
  });
  public readonly themeService = inject(SidebarItemThemeService);
  public readonly sidebarItemGroupComponent = inject<SidebarItemGroupComponent | undefined>(
    SidebarItemGroupComponent,
    {
      optional: true,
    }
  );
  public readonly sidebarMenuComponent = inject<SidebarMenuComponent | undefined>(
    SidebarMenuComponent
  );

  //#region properties
  public icon = model<string | undefined>(undefined);
  public color = model<keyof SidebarColors>(
    (this.sidebarItemGroupComponent ?? this.sidebarMenuComponent)!.color()
  );
  public label = model<string | undefined>(undefined);
  public customStyle = model<DeepPartial<SidebarItemTheme>>({});
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

  onClick(): void {
    (this.sidebarMenuComponent || this.sidebarItemGroupComponent?.sidebarMenuComponent)?.closeAll();
    (
      this.sidebarMenuComponent || this.sidebarItemGroupComponent?.sidebarMenuComponent
    )?.sidebarComponent.toggleVisibility(false);
  }
}
