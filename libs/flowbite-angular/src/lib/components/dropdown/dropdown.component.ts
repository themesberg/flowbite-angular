import * as properties from './dropdown.theme';

import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import { NgClass } from '@angular/common';
import {
  Placement,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom';

/**
 * @see https://flowbite.com/docs/components/dropdowns/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent extends BaseComponent implements AfterViewInit {
  protected override contentClasses?: Record<
    keyof properties.DropdownClass,
    string
  >;
  //#region properties
  protected $label: string = 'Dropdown';
  protected $isOpen: keyof FlowbiteBoolean = 'disabled';
  protected $position: keyof properties.DropdownPositions = 'bottom-center';
  protected $customStyle: Partial<properties.DropdownBaseTheme> = {};
  //#endregion
  //#region getter/setter
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  /** @default Dropdown */
  public get label(): string {
    return this.$label;
  }
  @Input() public set label(value: string) {
    this.$label = value;
    this.fetchClass();
  }

  /** @default false */
  public get isOpen(): boolean {
    return flowbiteBooleanToBoolean(this.$isOpen);
  }
  @Input({ transform: booleanAttribute }) public set isOpen(value: boolean) {
    this.$isOpen = booleanToFlowbiteBoolean(value);
    this.fetchClass();
  }

  /** @default bottom-center */
  public get position(): keyof properties.DropdownPositions {
    return this.$position;
  }
  @Input() public set position(value: keyof properties.DropdownPositions) {
    this.$position = value;
    this.fetchClass();
  }

  /** @default {} */
  public get customStyle(): Partial<properties.DropdownBaseTheme> {
    return this.$customStyle;
  }
  public set customStyle(value: Partial<properties.DropdownBaseTheme>) {
    this.$customStyle = value;
    this.fetchClass();
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (
      paramNotNull(this.$label, this.$isOpen, this.$position, this.$customStyle)
    ) {
      const propertyClass = properties.getClasses({
        label: this.$label,
        isOpen: this.$isOpen,
        placement: this.$position,
        customStyle: this.$customStyle,
      });

      this.contentClasses = propertyClass;
    }
  }
  //#endregion

  x = 0;
  y = 0;
  width = 0;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  calculatePosition() {
    computePosition(this.button.nativeElement, this.dropdown.nativeElement, {
      placement: this.convertPosition(this.position),
      middleware: [offset(8), flip(), shift()],
    }).then(({ x, y }: { x: number; y: number }) => {
      this.dropdown.nativeElement.style.left = x + 'px';
      this.dropdown.nativeElement.style.top = y + 'px';
      this.width = this.button.nativeElement.offsetWidth;
    });
  }

  ngAfterViewInit() {
    autoUpdate(this.button.nativeElement, this.dropdown.nativeElement, () => {
      if (!this.isOpen) return;
      this.calculatePosition();
    });
  }

  // Onclick outside the dropdown, close it
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (
      !this.dropdown.nativeElement.contains(event.target) &&
      this.isOpen &&
      !this.button.nativeElement.contains(event.target)
    ) {
      this.isOpen = false;
    }
  }

  convertPosition(pos: keyof properties.DropdownPositions): Placement {
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
