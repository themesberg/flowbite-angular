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

import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  untracked,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_SIDEBAR_COLOR_DEFAULT_VALUE = new InjectionToken<keyof SidebarColors>(
  'FLOWBITE_SIDEBAR_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_SIDEBAR_DISPLAY_MODE_DEFAULT_VALUE = new InjectionToken<
  keyof SidebarDisplayMode
>('FLOWBITE_SIDEBAR_DISPLAY_MODE_DEFAULT_VALUE');

export const FLOWBITE_SIDEBAR_IS_OPEN_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_SIDEBAR_IS_OPEN_DEFAULT_VALUE'
);

export const FLOWBITE_SIDEBAR_IS_ROUNDED_DEFAULT_VALUE = new InjectionToken<boolean>(
  'FLOWBITE_SIDEBAR_IS_ROUNDED_DEFAULT_VALUE'
);

export const FLOWBITE_SIDEBAR_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<SidebarTheme>
>('FLOWBITE_SIDEBAR_CUSTOM_STYLE_DEFAULT_VALUE');

export const sidebarDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_SIDEBAR_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_SIDEBAR_DISPLAY_MODE_DEFAULT_VALUE,
    useValue: 'push',
  },
  {
    provide: FLOWBITE_SIDEBAR_IS_OPEN_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_SIDEBAR_IS_ROUNDED_DEFAULT_VALUE,
    useValue: false,
  },
  {
    provide: FLOWBITE_SIDEBAR_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
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
  public readonly sidebarMenuChild = contentChild.required(SidebarMenuComponent);
  /**
   * The child `SidebarPageContentComponent`
   */
  public readonly sidebarPageContentChild = contentChild.required(SidebarPageContentComponent);

  //#region properties
  /**
   * Set the sidebar color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_SIDEBAR_COLOR_DEFAULT_VALUE));
  /**
   * Set the sidebar display mode
   *
   * @default push
   */
  public displayMode = model(inject(FLOWBITE_SIDEBAR_DISPLAY_MODE_DEFAULT_VALUE));
  /**
   * Set is the sidebar is open
   *
   * @default false
   */
  public isOpen = model(inject(FLOWBITE_SIDEBAR_IS_OPEN_DEFAULT_VALUE));
  /**
   * Set is the sidebar is rounded
   *
   * @default false
   */
  public isRounded = model(inject(FLOWBITE_SIDEBAR_IS_ROUNDED_DEFAULT_VALUE));
  /**
   * Set the custom style for this sidebar
   */
  public customStyle = model(inject(FLOWBITE_SIDEBAR_CUSTOM_STYLE_DEFAULT_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): SidebarClass {
    return this.themeService.getClasses({
      displayMode: this.displayMode(),
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      customStyle: this.customStyle(),
    });
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
