import type { DeepPartial } from '../../common';
import { CHEVRON_UP_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base.component';
import { IconComponent, IconRegistry } from '../icon';
import * as properties from './scroll-top.theme';
import { ScrollTopThemeService } from './scroll-top.theme.service';

import type { OnInit } from '@angular/core';
import { Component, HostListener, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'flowbite-scroll-top',
  standalone: true,
  imports: [IconComponent],
  template: `<flowbite-icon
    svgIcon="flowbite-angular:chevron-up"
    class="w-5 h-5" />`,
})
export class ScrollTopComponent extends BaseComponent implements OnInit {
  protected readonly themeService = inject(ScrollTopThemeService);
  protected readonly iconRegistry = inject(IconRegistry);
  protected readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<properties.ScrollTopClass>(properties.scrollTopClassInstance);

  //#region properties
  public color = input<keyof properties.ScrollTopColors>('red');
  public position = input<keyof properties.ScrollTopPositions>('bottom-right');
  public customStyle = input<DeepPartial<properties.ScrollTopBaseTheme>>({});
  //#endregion

  //#region BaseComponent implemenation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      position: this.position(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit() {
    super.ngOnInit();

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-up',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_UP_SVG_ICON),
    );
  }

  @HostListener('click')
  public onClick(): void {
    window.scrollTo(window.scrollX, 0);
  }
}
