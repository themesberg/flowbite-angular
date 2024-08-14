import type { DeepPartial } from '../../common';
import { SidebarStateService } from '../../services';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base-component.directive';
import type { SidebarMenuClass, SidebarMenuTheme } from './sidebar-menu.theme';
import { SidebarMenuThemeService } from './sidebar-menu.theme.service';

import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-menu',
  template: '<ng-content />',
})
export class SidebarMenuComponent extends BaseComponent {
  public readonly themeService = inject(SidebarMenuThemeService);
  public readonly sidebarStateService = inject(SidebarStateService);

  public override contentClasses = signal<SidebarMenuClass>(createClass({ rootClass: '' }));

  //#region properties
  public customStyle = input<DeepPartial<SidebarMenuTheme>>({});
  //#endregion

  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isOpen: booleanToFlowbiteBoolean(this.sidebarStateService.select('isOpen')()),
      displayMode: this.sidebarStateService.select('displayMode')(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
}
