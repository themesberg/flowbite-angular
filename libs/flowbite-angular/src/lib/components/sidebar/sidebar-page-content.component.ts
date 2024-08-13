import type { DeepPartial } from '../../common';
import { SidebarStateService } from '../../services';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import type { SidebarPageContentClass, SidebarPageContentTheme } from './sidebar-page-content.theme';
import { SidebarPageContentThemeService } from './sidebar-page-content.theme.service';

import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-page-content',
  template: `<ng-content />`,
})
export class SidebarPageContentComponent extends BaseComponent {
  protected readonly themeService = inject(SidebarPageContentThemeService);
  protected readonly sidebarStateService = inject(SidebarStateService);

  public override contentClasses = signal<SidebarPageContentClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<SidebarPageContentTheme>>({});
  //endregion

  //region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.sidebarStateService.select('isOpen')()),
      displayMode: this.sidebarStateService.select('displayMode')(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //endregion
}
