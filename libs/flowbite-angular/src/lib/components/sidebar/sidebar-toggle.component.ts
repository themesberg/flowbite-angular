import type { DeepPartial } from '../../common';
import { SidebarStateService } from '../../services';
import { BARS_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { SidebarToggleClass, SidebarToggleSizes, SidebarToggleTheme } from './sidebar-toggle.theme';
import { SidebarToggleThemeService } from './sidebar-toggle.theme.service';
import type { SidebarColors } from './sidebar.theme';

import type { OnInit } from '@angular/core';
import { Component, HostListener, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'flowbite-sidebar-toggle',
  template: `<flowbite-icon svgIcon="flowbite-angular:bars" />`,
})
export class SidebarToggleComponent extends BaseComponent<SidebarToggleClass> implements OnInit {
  public readonly themeService = inject(SidebarToggleThemeService);
  public readonly sidebarStateService = inject(SidebarStateService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  public color = input<keyof SidebarColors>('primary');
  public size = input<keyof SidebarToggleSizes>('sm');
  public customStyle = input<DeepPartial<SidebarToggleTheme>>({});
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
      this.domSanitizer.bypassSecurityTrustHtml(BARS_SVG_ICON),
    );
  }
  //#endregion

  @HostListener('click')
  public onClick(): void {
    const isOpen = this.sidebarStateService.select('isOpen')();

    this.sidebarStateService.set('isOpen', !isOpen);
  }
}
