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
  model,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
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
  public customStyle = model<DeepPartial<SidebarPageContentTheme>>({});
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
