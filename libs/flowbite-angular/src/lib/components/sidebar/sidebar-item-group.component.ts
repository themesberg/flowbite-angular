import type { DeepPartial } from '../../common';
import { SidebarItemGroupStateService } from '../../services/state/sidebar.state';
import { CHEVRON_DOWN_SVG_ICON } from '../../utils/icon.list';
import { BaseComponent } from '../base.component';
import { IconComponent, IconRegistry } from '../icon';
import * as properties from './sidebar-item-group.theme';
import { SidebarItemGroupThemeService } from './sidebar-item-group.theme.service';

import { NgClass, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [NgClass, NgIf, IconComponent],
  selector: 'flowbite-sidebar-item-group',
  template: `
    <span
      (click)="onClick()"
      class="flex flex-row justify-between text-red-600 m-2">
      <h4>{{ title() }}</h4>
      <flowbite-icon
        svgIcon="flowbite-angular:chevron-down"
        class="h-6 w-6 shrink-0 duration-200"
        [class.rotate-180]="!sidebarItemGroupStateService.select('isOpen')()" />
    </span>
    <ng-content *ngIf="sidebarItemGroupStateService.select('isOpen')()" />
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
  protected readonly sidebarItemGroupStateService: SidebarItemGroupStateService = inject(SidebarItemGroupStateService);
  protected readonly themeService = inject(SidebarItemGroupThemeService);
  protected readonly iconRegistry = inject(IconRegistry);
  protected readonly domSanitizer = inject(DomSanitizer);

  public override contentClasses = signal<properties.SidebarItemGroupClass>(properties.SidebarItemGroupClassInstance);

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public title = input.required<string>();
  public customStyle = input<DeepPartial<properties.SidebarItemGroupBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public onClick(): void {
    const isOpen = this.sidebarItemGroupStateService.select('isOpen')();

    this.sidebarItemGroupStateService.set('isOpen', !isOpen);
  }

  public override ngOnInit(): void {
    this.iconRegistry.addRawSvgIconInNamepsace(
      'flowbite-angular',
      'chevron-down',
      this.domSanitizer.bypassSecurityTrustHtml(CHEVRON_DOWN_SVG_ICON),
    );

    this.sidebarItemGroupStateService.set('isOpen', this.isOpen());

    super.ngOnInit();
  }
}
