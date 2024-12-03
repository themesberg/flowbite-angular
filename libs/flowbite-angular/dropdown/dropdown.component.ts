import { DropdownDividerComponent } from './dropdown-divider.component';
import { DropdownHeaderComponent } from './dropdown-header.component';
import { DropdownItemComponent } from './dropdown-item.component';
import type { DropdownClass, DropdownPositions, DropdownTheme } from './dropdown.theme';
import { DropdownThemeService } from './dropdown.theme.service';

import type { DeepPartial } from 'flowbite-angular';
import { BaseComponent, booleanToFlowbiteBoolean } from 'flowbite-angular';
import { IconComponent, IconRegistry } from 'flowbite-angular/icon';
import { CHEVRON_DOWN_SVG_ICON } from 'flowbite-angular/utils';

import { NgClass } from '@angular/common';
import type { ElementRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  inject,
  model,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent extends BaseComponent<DropdownClass> {
  dropdown = viewChild.required<ElementRef>('dropdown');
  button = viewChild.required<ElementRef>('button');

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

  /**
   * Toggle dropdown isOpen
   */
  public toggle() {
    this.isOpen.set(!this.isOpen());
  }

  // Onclick outside the dropdown, close it
  clickout(event: Event) {
    if (
      !this.dropdown().nativeElement.contains(event.target) &&
      this.isOpen() &&
      !this.button().nativeElement.contains(event.target)
    ) {
      this.isOpen.set(false);
    }
  }
}
