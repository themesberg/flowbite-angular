import type { DeepPartial } from '../../common';
import { SidebarItemGroupStateService } from '../../services/state/sidebar.state';
import { BaseComponent } from '../base.component';
import * as properties from './sidebar-item-group.theme';
import { SidebarItemGroupThemeService } from './sidebar-item-group.theme.service';

import { NgClass, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass, NgIf],
  selector: 'flowbite-sidebar-item-group',
  templateUrl: './sidebar-item-group.component.html',
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
  public readonly sidebarItemGroupStateService: SidebarItemGroupStateService = inject(SidebarItemGroupStateService);
  public readonly themeService = inject(SidebarItemGroupThemeService);

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
    this.sidebarItemGroupStateService.set('isOpen', this.isOpen());

    super.ngOnInit();
  }
}
