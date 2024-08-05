/**
 * Thanks to Angular Material for Icon part of this library : https://github.com/angular/components
 */

import { BaseComponent } from '../base.component';
import { IconRegistry } from './icon-registry';

import type { OnInit } from '@angular/core';
import { Component, effect, ElementRef, inject, input } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'flowbite-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
})
export class IconComponent extends BaseComponent implements OnInit {
  protected _elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);
  protected _iconRegistry = inject(IconRegistry);

  public svgIcon = input.required<string>();

  public override ngOnInit() {
    super.ngOnInit();

    effect(
      () => {
        this._updateSvgIcon();
      },
      { injector: this.injector },
    );
  }

  protected override fetchClass(): void {}

  private _splitIconName(iconName: string): [string, string] {
    if (!iconName) {
      return ['', ''];
    }

    const parts = iconName.split(':');
    switch (parts.length) {
      case 1:
        return ['', parts[0]];
      case 2:
        return <[string, string]>parts;
      default:
        throw Error(`Invalid icon name: "${iconName}"`);
    }
  }

  private _updateSvgIcon() {
    const [namespace, iconName] = this._splitIconName(this.svgIcon());

    this._iconRegistry
      .getSvgIconFromName(iconName, namespace)
      .pipe(take(1))
      .subscribe((svg) => this._setSvgElement(svg));
  }

  private _setSvgElement(svg: SVGElement) {
    this._clearSvgElements();

    this._elementRef.nativeElement.appendChild(svg);
  }

  private _clearSvgElements() {
    const layoutElement: HTMLElement = this._elementRef.nativeElement;
    let childCount = layoutElement.childNodes.length;

    while (childCount--) {
      const child = layoutElement.childNodes[childCount];

      if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
        child.remove();
      }
    }
  }
}
