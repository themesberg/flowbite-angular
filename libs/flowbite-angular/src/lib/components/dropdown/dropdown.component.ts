import type { DeepPartial } from '../../common';
import { DropdownStateService } from '../../services/state/dropdown.state';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { CHEVRON_DOWN_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base.component';
import { IconComponent, IconRegistry } from '../icon';
import * as properties from './dropdown.theme';
import { DropdownThemeService } from './dropdown.theme.service';

import { NgClass } from '@angular/common';
import type { AfterViewInit, OnInit } from '@angular/core';
import {
  afterNextRender,
  booleanAttribute,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
  ViewChild,
} from '@angular/core';
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
    <button
      type="button"
      [ngClass]="contentClasses().dropdownClass"
      (click)="toggle()"
      #button>
      <span [ngClass]="contentClasses().spanClass">
        {{ label() }}
        <flowbite-icon
          svgIcon="flowbite-angular:chevron-down"
          class="ml-2 h-4 w-4" />
      </span>
    </button>
    <div
      [ngClass]="contentClasses().containerClass"
      #dropdown
      [style.display]="dropdownStateService.select('isOpen')() ? 'block' : 'none'">
      <div [ngClass]="contentClasses().contentClass">
        <ul [ngClass]="contentClasses().subContentClass">
          <ng-content />
        </ul>
      </div>
    </div>
  `,
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
export class DropdownComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  protected readonly themeService = inject(DropdownThemeService);
  protected readonly dropdownStateService = inject(DropdownStateService);
  protected readonly iconRegistry = inject(IconRegistry);
  protected readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<properties.DropdownClass>(properties.DropdownClassInstance);

  //#region properties
  public label = input('Dropdown');
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public position = input<keyof properties.DropdownPositions>('bottom-center');
  public customStyle = input<DeepPartial<properties.DropdownBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      label: this.label(),
      isOpen: booleanToFlowbiteBoolean(this.dropdownStateService.select('isOpen')()),
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
    this.dropdownStateService.set('isOpen', !this.dropdownStateService.select('isOpen')());
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

  public override ngOnInit() {
    super.ngOnInit();

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON),
    );
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
