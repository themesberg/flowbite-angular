import type { DeepPartial } from '../../common';
import { SidebarItemGroupStateService } from '../../services/state/sidebar.state';
import { BaseComponent } from '../base.component';
import * as properties from './sidebar-item-group.theme';
import { SidebarItemGroupThemeService } from './sidebar-item-group.theme.service';

import { NgClass, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, effect, inject, input, signal } from '@angular/core';

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
  protected override contentClasses = signal<properties.SidebarItemGroupClass>(
    properties.SidebarItemGroupClassInstance,
  );

  protected readonly sidebarItemGroupStateService: SidebarItemGroupStateService = inject(SidebarItemGroupStateService);
  protected readonly themeService = inject(SidebarItemGroupThemeService);

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public title = input.required<string>();
  public customStyle = input<DeepPartial<properties.SidebarItemGroupBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  protected onClick(): void {
    const isOpen = this.sidebarItemGroupStateService.select('isOpen')();

    this.sidebarItemGroupStateService.set('isOpen', !isOpen);
  }

  public override ngOnInit(): void {
    super.ngOnInit();

    effect(
      () => {
        this.sidebarItemGroupStateService.set('isOpen', this.isOpen());
      },
      { injector: this.injector, allowSignalWrites: true },
    );
  }
}
