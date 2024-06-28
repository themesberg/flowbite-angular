import * as properties from './scroll-top.theme';

import { BaseComponent } from '../base.component';
import { ScrollTopThemeService } from './scroll-top.theme.service';

import { Component, HostListener, inject, input, signal } from '@angular/core';
import { DeepPartial } from '../../common';

@Component({
  selector: 'flowbite-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.component.html',
})
export class ScrollTopComponent extends BaseComponent {
  protected override contentClasses = signal<properties.ScrollTopClass>(
    properties.scrollTopClassInstance,
  );

  protected readonly themeService = inject(ScrollTopThemeService);

  //#region properties
  public color = input<keyof properties.ScrollTopColors>('red');
  public position = input<keyof properties.ScrollTopPositions>('bottom-right');
  public customStyle = input<DeepPartial<properties.ScrollTopBaseTheme>>({});
  //#endregion

  //#region BaseComponent implemenation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      position: this.position(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    window.scrollTo(window.scrollX, 0);
  }
}
