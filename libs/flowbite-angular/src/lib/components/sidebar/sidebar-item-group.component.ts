import type { DeepPartial } from '../../common';
import { SidebarItemGroupStateService } from '../../services/state/sidebar.state';
import { createClass } from '../../utils';
import { CHEVRON_DOWN_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base-component.directive';
import { IconComponent, IconRegistry } from '../icon';
import type { SidebarItemGroupClass, SidebarItemGroupTheme } from './sidebar-item-group.theme';
import { SidebarItemGroupThemeService } from './sidebar-item-group.theme.service';
import { SidebarMenuComponent } from './sidebar-menu.component';

import { NgClass, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, HostListener, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgClass, NgIf, IconComponent],
  selector: 'flowbite-sidebar-item-group',
  template: `
    <span class="flex flex-row justify-between text-red-600 m-2">
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

  public override contentClasses = signal<SidebarItemGroupClass>(createClass({ rootClass: '' }));

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public title = input.required<string>();
  public customStyle = input<DeepPartial<SidebarItemGroupTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }

  public override init(): void {
    this.stateService.setState({
      isOpen: this.isOpen(),
    });

    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON),
    );
  }
  //#endregion

  @HostListener('click')
  public onClick(): void {
    const isOpen = this.stateService.select('isOpen')();

    this.stateService.set('isOpen', !isOpen);
  }
}
