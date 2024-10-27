import type {
  ScrollTopClass,
  ScrollTopColors,
  ScrollTopPositions,
  ScrollTopTheme,
} from './scroll-top.theme';
import { ScrollTopThemeService } from './scroll-top.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CHEVRON_UP_SVG_ICON } from 'flowbite-angular/utils';

import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'flowbite-scroll-top',
  standalone: true,
  imports: [IconComponent],
  template: `<flowbite-icon svgIcon="flowbite-angular:chevron-up" class="w-5 h-5" />`,
  host: {
    '(click)': 'onClick()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_UP_SVG_ICON)
    );
  }
  //#endregion

  public onClick(): void {
    window.scrollTo(window.scrollX, 0);
  }
}
