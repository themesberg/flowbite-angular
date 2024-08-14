import type { DeepPartial } from '../../common';
import { SidebarStateService } from '../../services';
import { createClass } from '../../utils';
import { BARS_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base.component';
import { IconComponent, IconRegistry } from '../icon';
import type {
  SidebarToggleClass,
  SidebarToggleColors,
  SidebarToggleSizes,
  SidebarToggleTheme,
} from './sidebar-toggle.theme';
import { SidebarToggleThemeService } from './sidebar-toggle.theme.service';

import type { OnInit } from '@angular/core';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'flowbite-sidebar-toggle',
  template: `<flowbite-icon svgIcon="flowbite-angular:bars" />`,
})
export class SidebarToggleComponent extends BaseComponent implements OnInit {
  public readonly themeService = inject(SidebarToggleThemeService);
  public readonly sidebarStateService = inject(SidebarStateService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<SidebarToggleClass>(createClass({ rootClass: '' }));

  //#region properties
  public color = input<keyof SidebarToggleColors>('gray');
  public size = input<keyof SidebarToggleSizes>('sm');
  public customStyle = input<DeepPartial<SidebarToggleTheme>>({});
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

  public override ngOnInit() {
    super.ngOnInit();

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'tabs',
      this.domSanitizer.bypassSecurityTrustHtml(BARS_SVG_ICON),
    );
  }

  @HostListener('click')
  public onClick(): void {
    const isOpen = this.sidebarStateService.select('isOpen')();

    this.sidebarStateService.set('isOpen', !isOpen);
  }
}
