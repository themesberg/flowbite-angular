import * as properties from './dropdown.theme';

import { BaseComponent } from '../base.component';
import { DropdownStateService } from '../../services/state/dropdown.state';
import { DropdownThemeService } from './dropdown.theme.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  afterNextRender,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { DeepPartial } from '../../common';
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
  providers: [
    {
      provide: DropdownStateService,
      useFactory: () => {
        const service = inject(DropdownStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new DropdownStateService();
      },
    },
  ],
})
export class DropdownComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  protected override contentClasses = signal<properties.DropdownClass>(
    properties.DropdownClassInstance,
  );

  protected readonly themeService = inject(DropdownThemeService);
  protected readonly dropdownStateService: DropdownStateService =
    inject(DropdownStateService);

  //#region properties
  public label = input('Dropdown');
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public position = input<keyof properties.DropdownPositions>('bottom-center');
  public customStyle = input<DeepPartial<properties.DropdownBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      label: this.label(),
      isOpen: booleanToFlowbiteBoolean(
        this.dropdownStateService.select('isOpen')(),
      ),
      placement: this.position(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  x = 0;
  y = 0;
  width = 0;

  toggle() {
    this.dropdownStateService.set(
      'isOpen',
      !this.dropdownStateService.select('isOpen')(),
    );
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
    afterNextRender(
      () => {
        this.dropdownStateService.set('isOpen', this.isOpen());
      },
      { injector: this.injector },
    );

    autoUpdate(this.button.nativeElement, this.dropdown.nativeElement, () => {
      if (!this.dropdownStateService.select('isOpen')()) return;
      this.calculatePosition();
    });
  }

  // Onclick outside the dropdown, close it
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (
      !this.dropdown.nativeElement.contains(event.target) &&
      this.dropdownStateService.select('isOpen')() &&
      !this.button.nativeElement.contains(event.target)
    ) {
      this.dropdownStateService.set('isOpen', false);
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
