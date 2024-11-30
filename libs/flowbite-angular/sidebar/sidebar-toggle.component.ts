import type {
  SidebarToggleClass,
  SidebarToggleSizes,
  SidebarToggleTheme,
} from './sidebar-toggle.theme';
import { SidebarToggleThemeService } from './sidebar-toggle.theme.service';
import { SidebarComponent } from './sidebar.component';
import type { SidebarColors } from './sidebar.theme';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { BARS_SVG_ICON } from 'flowbite-angular/utils';

import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export const FLOWBITE_SIDEBAR_TOGGLE_COLOR_DEFAULT_VALUE = new InjectionToken<keyof SidebarColors>(
  'FLOWBITE_SIDEBAR_TOGGLE_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_SIDEBAR_TOGGLE_SIZE_DEFAULT_VALUE = new InjectionToken<
  keyof SidebarToggleSizes
>('FLOWBITE_SIDEBAR_TOGGLE_SIZE_DEFAULT_VALUE');

export const FLOWBITE_SIDEBAR_TOGGLE_CUSTOM_STYLE_DEFAUL_VALUE = new InjectionToken<
  DeepPartial<SidebarToggleTheme>
>('FLOWBITE_SIDEBAR_TOGGLE_CUSTOM_STYLE_DEFAUL_VALUE');

export const sidebarToggleDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_SIDEBAR_TOGGLE_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_SIDEBAR_TOGGLE_SIZE_DEFAULT_VALUE,
    useValue: 'sm',
  },
  {
    provide: FLOWBITE_SIDEBAR_TOGGLE_CUSTOM_STYLE_DEFAUL_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'flowbite-sidebar-toggle',
  template: `<flowbite-icon svgIcon="flowbite-angular:bars" />`,
  host: {
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarToggleComponent extends BaseComponent<SidebarToggleClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(SidebarToggleThemeService);
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);
  /**
   * The `SidebarComponent` to use
   *
   * @default The injected `SidebarComponent`
   */
  public readonly sidebarComponent = model(inject(SidebarComponent));

  //#region properties
  /**
   * Set the sidebar toggle color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_SIDEBAR_TOGGLE_COLOR_DEFAULT_VALUE));
  /**
   * Set the sidebar toggle size
   *
   * @default sm
   */
  public size = model(inject(FLOWBITE_SIDEBAR_TOGGLE_SIZE_DEFAULT_VALUE));
  /**
   * Set the custom style for this sidebar toggle
   */
  public customStyle = model(inject(FLOWBITE_SIDEBAR_TOGGLE_CUSTOM_STYLE_DEFAUL_VALUE));
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): SidebarToggleClass {
    return this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'tabs',
      this.domSanitizer.bypassSecurityTrustHtml(BARS_SVG_ICON)
    );
  }
  //#endregion

  /**
   * Toggle sidebar visibility
   */
  public onClick(): void {
    const isOpen = this.sidebarComponent().isOpen();

    this.sidebarComponent().isOpen.set(!isOpen);
  }
}
