import * as properties from './dropdown.theme';

import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';

import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
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

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent
  extends BaseComponent
  implements AfterViewInit, OnInit
{
  @Input() label = 'Dropdown';
  @Input() isOpen: keyof FlowbiteBoolean = 'disabled';
  @Input() position: keyof properties.DropdownPositions = 'bottom-center';
  @Input() customStyle: Partial<properties.DropdownBaseTheme> = {};

  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('button') button!: ElementRef;
  x = 0;
  y = 0;
  width = 0;

  ngOnInit(): void {
    const propertyClass = properties.getClasses({
      label: this.label,
      isOpen: this.isOpen,
      placement: this.position,
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.dropdownClass;
    this.contentClasses = {
      spanClasses: propertyClass.spanClass,
      containerClasses: propertyClass.containerClass,
      contentClasses: propertyClass.contentClass,
      subContentClasses: propertyClass.subContentClass,
    };
  }

  toggle() {
    this.isOpen = this.isOpen === 'disabled' ? 'enabled' : 'disabled';
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
      if (this.isOpen === 'disabled') return;
      this.calculatePosition();
    });
  }

  // Onclick outside the dropdown, close it
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (
      !this.dropdown.nativeElement.contains(event.target) &&
      this.isOpen === 'enabled' &&
      !this.button.nativeElement.contains(event.target)
    ) {
      this.isOpen = 'disabled';
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
