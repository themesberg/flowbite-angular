import type { DeepPartial } from '../../common';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { CHEVRON_DOWN_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import { DropdownDividerComponent } from './dropdown-divider.component';
import { DropdownHeaderComponent } from './dropdown-header.component';
import { DropdownItemComponent } from './dropdown-item.component';
import type { DropdownClass, DropdownPositions, DropdownTheme } from './dropdown.theme';
import { DropdownThemeService } from './dropdown.theme.service';

import { NgClass } from '@angular/common';
import type { AfterViewInit } from '@angular/core';
import { Component, contentChildren, ElementRef, inject, model, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import type { Placement } from '@floating-ui/dom';
import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

/**
 * @see https://flowbite.com/docs/components/dropdowns/
 */
@Component({
  standalone: true,
  imports: [NgClass, IconComponent],
  selector: 'flowbite-dropdown',
  template: `
    <button type="button" [ngClass]="contentClasses().dropdownClass" (click)="toggle()" #button>
      <span [ngClass]="contentClasses().spanClass">
        {{ label() }}
        <flowbite-icon svgIcon="flowbite-angular:chevron-down" class="ml-2 h-4 w-4" />
      </span>
    </button>
    <div
      [ngClass]="contentClasses().containerClass"
      #dropdown
      [style.display]="isOpen() ? 'block' : 'none'">
      <div [ngClass]="contentClasses().contentClass">
        <ul [ngClass]="contentClasses().subContentClass">
          <ng-content />
        </ul>
      </div>
    </div>
  `,
  host: {
    '(document:click)': 'clickout($event)',
  },
})
export class DropdownComponent extends BaseComponent<DropdownClass> implements AfterViewInit {
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  public readonly themeService = inject(DropdownThemeService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);
  public readonly dropdownItemChildren = contentChildren(DropdownItemComponent);
  public readonly dropdownHeaderChildren = contentChildren(DropdownHeaderComponent);
  public readonly dropdownDividerChildren = contentChildren(DropdownDividerComponent);

  //#region properties
  public label = model('Dropdown');
  public isOpen = model<boolean>(false);
  public position = model<keyof DropdownPositions>('bottom-center');
  public customStyle = model<DeepPartial<DropdownTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): DropdownClass {
    return this.themeService.getClasses({
      label: this.label(),
      isOpen: booleanToFlowbiteBoolean(this.isOpen()),
      placement: this.position(),
      customStyle: this.customStyle(),
    });
  }

  public override init(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON)
    );
  }

  public override verify(): void {
    if (this.dropdownItemChildren().length === 0) {
      throw new Error('No DropdownItemComponent available');
    }
  }
  //#endregion

  x = 0;
  y = 0;
  width = 0;

  toggle() {
    this.isOpen.set(!this.isOpen());
  }

  calculatePosition() {
    computePosition(this.button.nativeElement, this.dropdown.nativeElement, {
      placement: this.convertPosition(this.position()),
      middleware: [offset(8), flip(), shift()],
    }).then(({ x, y }: { x: number; y: number }) => {
      this.dropdown.nativeElement.style.left = x + 'px';
      this.dropdown.nativeElement.style.top = y + 'px';
      this.width = this.button.nativeElement.offsetWidth;
    });
  }

  ngAfterViewInit() {
    autoUpdate(this.button.nativeElement, this.dropdown.nativeElement, () => {
      if (!this.isOpen()) return;
      this.calculatePosition();
    });
  }

  // Onclick outside the dropdown, close it
  clickout(event: Event) {
    if (
      !this.dropdown.nativeElement.contains(event.target) &&
      this.isOpen() &&
      !this.button.nativeElement.contains(event.target)
    ) {
      this.isOpen.set(false);
    }
  }

  convertPosition(pos: keyof DropdownPositions): Placement {
    switch (pos) {
      case 'top-center':
        return 'top';
      case 'bottom-center':
        return 'bottom';
      case 'left-center':
        return 'left';
      case 'right-center':
        return 'right';
    }
  }
}
