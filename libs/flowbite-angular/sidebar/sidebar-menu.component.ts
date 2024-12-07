import { SidebarItemGroupComponent } from './sidebar-item-group.component';
import { SidebarItemComponent } from './sidebar-item.component';
import type { SidebarMenuClass, SidebarMenuTheme } from './sidebar-menu.theme';
import { SidebarMenuThemeService } from './sidebar-menu.theme.service';
import { SidebarComponent } from './sidebar.component';
import type { SidebarColors } from './sidebar.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_SIDEBAR_MENU_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<SidebarMenuTheme>
>('FLOWBITE_SIDEBAR_MENU_CUSTOM_STYLE_DEFAULT_VALUE');

export const sidebarMenuDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_SIDEBAR_MENU_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-menu',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent extends BaseComponent<SidebarMenuClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(SidebarMenuThemeService);
  /**
   * The parent `SidebarComponent`
   */
  public readonly sidebarComponent = inject(SidebarComponent);
  /**
   * List of `SidebarItemGroupComponent`
   */
  public readonly sidebarItemGroupChildren = contentChildren(SidebarItemGroupComponent);
  /**
   * List of `SidebarItemComponent`
   */
  public readonly sidebarItemChildren = contentChildren(SidebarItemComponent);

  //#region properties
  /**
   * Set the sidebar menu color
   *
   * @default `SidebarComponent`'s color
   */
  public color = model<keyof SidebarColors>(this.sidebarComponent.color());
  /**
   * Set the custom style for this sidebar menu
   */
  public customStyle = model(inject(FLOWBITE_SIDEBAR_MENU_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  public override fetchClass(): SidebarMenuClass {
    return this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.sidebarComponent.isOpen()),
      color: this.color(),
      displayMode: this.sidebarComponent.displayMode(),
      customStyle: this.customStyle(),
    });
  }

  /**
   * Toggle visibility of ll children to false
   */
  public closeAll(): void {
    this.sidebarItemGroupChildren().forEach((x) => x.toggleVisibility(false));
  }
}
