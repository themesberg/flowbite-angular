import * as properties from './badge.theme';

import { BaseComponent } from '../base.component';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import { BadgeThemeService } from './badge.theme.service';
import {
  Component,
  HostListener,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

/**
 * @see https://flowbite.com/docs/components/badge/
 */
@Component({
  standalone: true,
  imports: [NgClass, RouterLink],
  selector: 'flowbite-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent extends BaseComponent {
  protected themeService = inject(BadgeThemeService);
  protected router = inject(Router);

  protected override contentClasses = signal<properties.BadgeClass>(
    properties.BadgeClassInstance,
  );

  //#region properties
  public color = input<keyof properties.BadgeColors>('blue');
  public size = input<keyof properties.BadgeSizes>('xs');
  public isIconOnly = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isPill = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public href = input<string | undefined>(undefined);
  public customStyle = input<Partial<properties.BadgeBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      size: this.size(),
      isIconOnly: booleanToFlowbiteBoolean(this.isIconOnly()),
      isPill: booleanToFlowbiteBoolean(this.isPill()),
      href: this.href(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  @HostListener('click')
  protected onClick(): void {
    const url = this.href();

    if (url) this.router.navigateByUrl(url);
  }
}
