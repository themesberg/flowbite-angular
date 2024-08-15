import type { DeepPartial } from '../../common';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type { SidebarPageContentClass, SidebarPageContentTheme } from './sidebar-page-content.theme';
import { SidebarPageContentThemeService } from './sidebar-page-content.theme.service';
import { SidebarComponent } from './sidebar.component';

import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-page-content',
  template: `<ng-content />`,
})
export class SidebarPageContentComponent extends BaseComponent {
  public readonly themeService = inject(SidebarPageContentThemeService);
  public readonly sidebarComponent = inject(SidebarComponent);

  public override contentClasses = signal<SidebarPageContentClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<SidebarPageContentTheme>>({});
  //endregion

  //region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.sidebarComponent.stateService.select('isOpen')()),
      displayMode: this.sidebarComponent.stateService.select('displayMode')(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //endregion
}
