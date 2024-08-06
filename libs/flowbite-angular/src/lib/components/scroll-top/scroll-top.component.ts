import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base.component';
import * as properties from './scroll-top.theme';
import { ScrollTopThemeService } from './scroll-top.theme.service';

import { Component, HostListener, inject, input, signal } from '@angular/core';

@Component({
  selector: 'flowbite-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.component.html',
})
export class ScrollTopComponent extends BaseComponent {
  public readonly themeService = inject(ScrollTopThemeService);

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

  @HostListener('click')
  public onClick(): void {
    window.scrollTo(window.scrollX, 0);
  }
}
