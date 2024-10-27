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

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-page-content',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarPageContentComponent extends BaseComponent<SidebarPageContentClass> {
  public readonly themeService = inject(SidebarPageContentThemeService);
  public readonly sidebarComponent = inject(SidebarComponent);

  //#region properties
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
