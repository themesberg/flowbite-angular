import type { DeepPartial } from '../../common';
import { SidebarStateService } from '../../services';
import { BaseComponent } from '../base.component';
import * as properties from './sidebar-toggle.theme';
import { SidebarToggleThemeService } from './sidebar-toggle.theme.service';

import { Component, HostListener, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-sidebar-toggle',
  templateUrl: './sidebar-toggle.component.html',
})
export class SidebarToggleComponent extends BaseComponent {
  public readonly themeService = inject(SidebarToggleThemeService);
  public readonly sidebarStateService: SidebarStateService = inject(SidebarStateService);

  public override contentClasses = signal<properties.SidebarToggleClass>(properties.SidebarToggleClassInstance);

  //#region properties
  public color = input<keyof properties.SidebarToggleColors>('gray');
  public size = input<keyof properties.SidebarToggleSizes>('sm');
  public customStyle = input<DeepPartial<properties.SidebarToggleBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  public onClick(): void {
    const isOpen = this.sidebarStateService.select('isOpen')();

    this.sidebarStateService.set('isOpen', !isOpen);
  }
}
