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
  InjectionToken,
  makeEnvironmentProviders,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export const FLOWBITE_SCROLL_TOP_COLOR_DEFAULT_VALUE = new InjectionToken<keyof ScrollTopColors>(
  'FLOWBITE_SCROLL_TOP_COLOR_DEFAULT_VALUE'
);

export const FLOWBITE_SCROLL_TOP_POSITION_DEFAULT_VALUE = new InjectionToken<
  keyof ScrollTopPositions
>('FLOWBITE_SCROLL_TOP_POSITION_DEFAULT_VALUE');

export const FLOWBITE_SCROLL_TOP_CUSTOM_STYLE_DEFAULT_VALUE = new InjectionToken<
  DeepPartial<ScrollTopTheme>
>('FLOWBITE_SCROLL_TOP_CUSTOM_STYLE_DEFAULT_VALUE');

export const scrollTopDefaultValueProvider = makeEnvironmentProviders([
  {
    provide: FLOWBITE_SCROLL_TOP_COLOR_DEFAULT_VALUE,
    useValue: 'primary',
  },
  {
    provide: FLOWBITE_SCROLL_TOP_POSITION_DEFAULT_VALUE,
    useValue: 'bottom-right',
  },
  {
    provide: FLOWBITE_SCROLL_TOP_CUSTOM_STYLE_DEFAULT_VALUE,
    useValue: {},
  },
]);

/**
 * Provide a way to go at the top of the page via a button
 */
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollTopComponent extends BaseComponent<ScrollTopClass> implements OnInit {
  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(ScrollTopThemeService);
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);

  //#region properties
  /**
   * Set the scroll top color
   *
   * @default primary
   */
  public color = model(inject(FLOWBITE_SCROLL_TOP_COLOR_DEFAULT_VALUE));
  /**
   * Set the scroll top position
   *
   * @default bottom-right
   */
  public position = model(inject(FLOWBITE_SCROLL_TOP_POSITION_DEFAULT_VALUE));
  /**
   * Set the custom style for this scroll top
   */
  public customStyle = model(inject(FLOWBITE_SCROLL_TOP_CUSTOM_STYLE_DEFAULT_VALUE));
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

  /**
   * Navigate to the top of the page
   */
  public onClick(): void {
    window.scrollTo(window.scrollX, 0);
  }
}
