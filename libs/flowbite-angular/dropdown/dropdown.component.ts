import { DropdownDividerComponent } from './dropdown-divider.component';
import { DropdownHeaderComponent } from './dropdown-header.component';
import { DropdownItemComponent } from './dropdown-item.component';
import type { DropdownClass, DropdownPositions, DropdownTheme } from './dropdown.theme';
import { DropdownThemeService } from './dropdown.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CHEVRON_DOWN_SVG_ICON } from 'flowbite-angular/utils';

import type { AfterViewInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  ElementRef,
  inject,
  model,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import type { Placement } from '@floating-ui/dom';
import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

/**
 * @see https://flowbite.com/docs/components/dropdowns/
 */
@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'flowbite-dropdown',
  template: `
    <button
      type="button"
      [class]="contentClasses().dropdownClass"
      (click)="toggle()"
      #button>
      <span [class]="contentClasses().spanClass">
        {{ label() }}
        <flowbite-icon
          svgIcon="flowbite-angular:chevron-down"
          class="ml-2 h-4 w-4" />
      </span>
    </button>
    <div
      [class]="contentClasses().containerClass"
      #dropdown
      [style.display]="isOpen() ? 'block' : 'none'">
      <div [class]="contentClasses().contentClass">
        <ul [class]="contentClasses().subContentClass">
          <ng-content />
        </ul>
      </div>
    </div>
  `,
  host: {
    '(document:click)': 'clickout($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent extends BaseComponent<DropdownClass> implements AfterViewInit {
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  /**
   * Service injected used to generate class
   */
  public readonly themeService = inject(DropdownThemeService);
  /**
   * `IconRegistry` service
   */
  public readonly iconRegistry = inject(IconRegistry);
  /**
   * `DomSanitizer` service
   */
  public readonly domSanitizer = inject(DomSanitizer);
  /**
   * List of `DropdownItemComponent`
   */
  public readonly dropdownItemChildren = contentChildren(DropdownItemComponent);
  /**
   * List of `DropdownHeaderComponent`
   */
  public readonly dropdownHeaderChildren = contentChildren(DropdownHeaderComponent);
  /**
   * List of `DropdownDividerComponent`
   */
  public readonly dropdownDividerChildren = contentChildren(DropdownDividerComponent);

  //#region properties
  /**
   * Set the dropdown label
   *
   * @default Dropdown
   */
  public label = model('Dropdown');
  /**
   * Set if the dropdown is open
   *
   * @default false
   */
  public isOpen = model<boolean>(false);
  /**
   * Set the dropdown position
   *
   * @default bottom-center
   */
  public position = model<keyof DropdownPositions>('bottom-center');
  /**
   * Set the custom style for this dropdown
   */
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

  /**
   * Toggle dropdown isOpen
   */
  public toggle() {
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
    // todo : Fix ERROR ReferenceError: ResizeObserver is not defined
    // Append when runing command 'pnpm lib:build'
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
