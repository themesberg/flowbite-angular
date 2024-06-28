import * as properties from './sidebar-toggle.theme';

import { BaseComponent } from '../base.component';
import { SidebarStateService } from '../../services';
import { SidebarToggleThemeService } from './sidebar-toggle.theme.service';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { DeepPartial } from '../../common';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-toggle',
  templateUrl: './sidebar-toggle.component.html',
})
export class SidebarToggleComponent extends BaseComponent {
  protected override contentClasses = signal<properties.SidebarToggleClass>(
    properties.SidebarToggleClassInstance,
  );

  protected readonly themeService = inject(SidebarToggleThemeService);
  protected readonly sidebarStateService: SidebarStateService =
    inject(SidebarStateService);

  //#region properties
  public color = input<keyof properties.SidebarToggleColors>('gray');
  public size = input<keyof properties.SidebarToggleSizes>('sm');
  public customStyle = input<DeepPartial<properties.SidebarToggleBaseTheme>>(
    {},
  );
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    const isOpen = this.sidebarStateService.select('isOpen')();

    this.sidebarStateService.set('isOpen', !isOpen);
  }
}
