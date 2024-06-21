import * as properties from './sidebar-toggle.theme';

import { BaseComponent } from '../base.component';
import { SidebarState, SignalStoreService } from '../../services';
import { SidebarToggleThemeService } from './sidebar-toggle.theme.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { Component, HostListener, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-toggle',
  templateUrl: './sidebar-toggle.component.html',
})
export class SidebarToggleComponent extends BaseComponent {
  protected readonly themeService = inject(SidebarToggleThemeService);
  protected readonly sidebarService = inject<SignalStoreService<SidebarState>>(
    SignalStoreService<SidebarState>,
  );

  protected override contentClasses = signal<properties.SidebarToggleClass>(
    properties.SidebarToggleClassInstance,
  );

  //#region properties
  public customStyle = input<Partial<properties.SidebarToggleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isCollapsed: booleanToFlowbiteBoolean(
        this.sidebarService.select('isCollapsed')(),
      ),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    const isCollapsed = this.sidebarService.select('isCollapsed')();

    this.sidebarService.set('isCollapsed', !isCollapsed);
  }
}
