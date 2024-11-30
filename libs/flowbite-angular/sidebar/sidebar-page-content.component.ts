import type {
  SidebarPageContentClass,
  SidebarPageContentTheme,
} from './sidebar-page-content.theme';
import { SidebarPageContentThemeService } from './sidebar-page-content.theme.service';
import { SidebarComponent } from './sidebar.component';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';

export const FLOWBITE_SIDEBAR_PAGE_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<SidebarPageContentTheme>
>('FLOWBITE_SIDEBAR_PAGE_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE');

export const sidebarPageContentDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_SIDEBAR_PAGE_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-page-content',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarPageContentComponent extends BaseComponent<SidebarPageContentClass> {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(SidebarPageContentThemeService);
  /**
   * The parent `SidebarComponent`
   */
  public readonly sidebarComponent = inject(SidebarComponent);

  //#region properties
  /**
   * Set the custom style for this sidebar page content
   */
  public customStyle = model(inject(FLOWBITE_SIDEBAR_PAGE_CONTENT_CUSTOM_STYLE_DEFAULT_VALUE));
  //endregion

  //region BaseComponent implementation
  public override fetchClass(): SidebarPageContentClass {
    return this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.sidebarComponent.isOpen()),
      displayMode: this.sidebarComponent.displayMode(),
      customStyle: this.customStyle(),
    });
  }
  //endregion
}
