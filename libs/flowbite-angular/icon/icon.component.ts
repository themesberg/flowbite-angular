/**
 * Thanks to Angular Material for Icon part of this library : https://github.com/angular/components
 */

import type { FlowbiteClass } from '../../common';
import { BaseComponent } from '../base-component.directive';
import { IconRegistry } from './icon-registry';

import type { OnInit } from '@angular/core';
import { Component, effect, ElementRef, inject, model } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'flowbite-icon',
  standalone: true,
  template: `<ng-content />`,
})
export class IconComponent extends BaseComponent<FlowbiteClass> implements OnInit {
  public _elementRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);
  public _iconRegistry = inject(IconRegistry);

  public svgIcon = model.required<string>();

  public override init(): void {
    effect(
      () => {
        this._updateSvgIcon();
      },
      { injector: this.injector }
    );
  }

  public override fetchClass(): FlowbiteClass {
    return { rootClass: '' };
  }

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
