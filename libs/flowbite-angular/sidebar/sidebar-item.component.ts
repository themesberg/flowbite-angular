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
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_SIDEBAR_ITEM_ICON_DEFAULT_VALUE = new InjectionToken<string | undefined>(
  'FLOWBITE_SIDEBAR_ITEM_ICON_DEFAULT_VALUE'
);

export const FLOWBITE_SIDEBAR_ITEM_LABEL_DEFAULT_VALUE = new InjectionToken<string | undefined>(
  'FLOWBITE_SIDEBAR_ITEM_LABEL_DEFAULT_VALUE'
);

export const FLOWBITE_SIDEBAR_ITEM_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<SidebarItemTheme>
>('FLOWBITE_SIDEBAR_ITEM_CUSTOM_STYLE_DEFAULT_VALUE');

export const sidebarItemDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_SIDEBAR_ITEM_ICON_DEFAULT_VALUE,
    useValue: undefined,
  },
  {
    provide: FLOWBITE_SIDEBAR_ITEM_LABEL_DEFAULT_VALUE,
    useValue: undefined,
  },
  {
    provide: FLOWBITE_SIDEBAR_ITEM_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
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
  host: {
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent extends BaseComponent<SidebarItemClass> {
  /**
   * Optional `FlowbiteRouterLinkDirective` injected
   */
  public readonly flowbiteRouterLink = inject(FlowbiteRouterLinkDirective, { optional: true });
  /**
   * Optional `FlowbiteRouterLinkActiveDirective` injected
   */
  public readonly flowbiteRouterLinkActive = inject(FlowbiteRouterLinkActiveDirective, {
    optional: true,
  });
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(SidebarItemThemeService);
  /**
   * The optional parent `SidebarItemGroupComponent`
   */
  public readonly sidebarItemGroupComponent = inject(SidebarItemGroupComponent, { optional: true });
  /**
   * The optional parent `SidebarMenuComponent`
   */
  public readonly sidebarMenuComponent = inject(SidebarMenuComponent, { optional: true });

  //#region properties
  /**
   * Set the sidebar item icon
   *
   * @default undefined
   */
  public icon = model(inject(FLOWBITE_SIDEBAR_ITEM_ICON_DEFAULT_VALUE));
  /**
   * Set the sidebar item color
   *
   * @default `SidebarItemGroupComponent`'s color
   * @default `SidebarMenuComponent`'s color
   */
  public color = model<keyof SidebarColors>(
    (this.sidebarItemGroupComponent ?? this.sidebarMenuComponent)!.color()
  );
  /**
   * Set the sidebar item label
   *
   * @default undefined
   */
  public label = model(inject(FLOWBITE_SIDEBAR_ITEM_LABEL_DEFAULT_VALUE));
  /**
   * Set the custom style for this sidebar item
   */
  public customStyle = model(inject(FLOWBITE_SIDEBAR_ITEM_CUSTOM_STYLE_DEFAULT_VALUE));
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
  //#endregion

  /**
   * Toggle sidebar menu visibility
   */
  onClick(): void {
    (this.sidebarMenuComponent || this.sidebarItemGroupComponent?.sidebarMenuComponent)?.closeAll();
    (
      this.sidebarMenuComponent || this.sidebarItemGroupComponent?.sidebarMenuComponent
    )?.sidebarComponent.toggleVisibility(false);
  }
}
