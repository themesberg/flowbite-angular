import type { DeepPartial } from '../../common';
import { CHEVRON_UP_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { ScrollTopClass, ScrollTopColors, ScrollTopPositions, ScrollTopTheme } from './scroll-top.theme';
import { ScrollTopThemeService } from './scroll-top.theme.service';

import type { OnInit } from '@angular/core';
import { Component, inject, model } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'flowbite-scroll-top',
  standalone: true,
  imports: [IconComponent],
  template: `<flowbite-icon
    svgIcon="flowbite-angular:chevron-up"
    class="w-5 h-5" />`,
  host: {
    '(click)': 'onClick()',
  },
})
export class ScrollTopComponent extends BaseComponent<ScrollTopClass> implements OnInit {
  public readonly themeService = inject(ScrollTopThemeService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  public color = model<keyof ScrollTopColors>('primary');
  public position = model<keyof ScrollTopPositions>('bottom-right');
  public customStyle = model<DeepPartial<ScrollTopTheme>>({});
  //#endregion

  //#region BaseComponent implemenation
  public override fetchClass(): ScrollTopClass {
    return this.themeService.getClasses({
      color: this.color(),
      position: this.position(),
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-up',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_UP_SVG_ICON),
    );
  }
  //#endregion

  public onClick(): void {
    window.scrollTo(window.scrollX, 0);
  }
}
