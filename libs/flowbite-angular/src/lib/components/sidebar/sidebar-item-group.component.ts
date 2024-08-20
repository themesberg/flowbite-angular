import type { DeepPartial } from '../../common';
import { SidebarItemGroupStateService } from '../../services/state/sidebar.state';
import { createClass } from '../../utils';
import { CHEVRON_DOWN_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { SidebarItemGroupClass, SidebarItemGroupTheme } from './sidebar-item-group.theme';
import { SidebarItemGroupThemeService } from './sidebar-item-group.theme.service';
import { SidebarItemComponent } from './sidebar-item.component';
import { SidebarMenuComponent } from './sidebar-menu.component';
import type { SidebarColors } from './sidebar.theme';

import { NgClass, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, contentChildren, effect, inject, input, signal, untracked } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgClass, NgIf, IconComponent],
  selector: 'flowbite-sidebar-item-group',
  template: `
    <span
      [class]="contentClasses().spanClass"
      (click)="onSpanClick()">
      <h4>{{ title() }}</h4>
      <flowbite-icon
        svgIcon="flowbite-angular:chevron-down"
        class="h-6 w-6 shrink-0 duration-200"
        [class.rotate-180]="!stateService.select('isOpen')()" />
    </span>
    <ng-content *ngIf="stateService.select('isOpen')()" />
  `,
  providers: [
    {
      provide: SidebarItemGroupStateService,
      useFactory: () => {
        const service = inject(SidebarItemGroupStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new SidebarItemGroupStateService();
      },
    },
  ],
})
export class SidebarItemGroupComponent extends BaseComponent implements OnInit {
  public readonly stateService = inject(SidebarItemGroupStateService);
  public readonly themeService = inject(SidebarItemGroupThemeService);
  public readonly iconRegistry = inject(IconRegistry);
  public readonly domSanitizer = inject(DomSanitizer);
  public readonly sidebarMenuComponent = inject(SidebarMenuComponent);
  public readonly sidebarItemChildren = contentChildren(SidebarItemComponent);

  public override contentClasses = signal<SidebarItemGroupClass>(createClass({ rootClass: '', spanClass: '' }));

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public color = input<keyof SidebarColors>('primary');
  public title = input.required<string>();
  public customStyle = input<DeepPartial<SidebarItemGroupTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override verify(): void {
    if (this.sidebarItemChildren().length === 0) {
      throw new Error('No SidebarItemComponent available');
    }
  }

  public override init(): void {
    this.stateService.setState({
      isOpen: this.isOpen(),
    });

    effect(
      () => {
        if (this.sidebarItemChildren().some((x) => x.flowbiteRouterLinkActive.isActive())) {
          this.toggleVisibility(true);
        }
      },
      { injector: this.injector, allowSignalWrites: true },
    );

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON),
    );
  }
  //#endregion

  public onSpanClick(): void {
    this.toggleVisibility();
  }

  public toggleVisibility(isOpen?: boolean): void {
    if (isOpen === undefined) {
      isOpen = untracked(() => !this.stateService.select('isOpen')());
    }

    this.stateService.set('isOpen', isOpen);
  }
}
