import type { DeepPartial } from '../../common';
import { SidebarStateService } from '../../services/state/sidebar.state';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import * as properties from './sidebar.theme';
import { SidebarThemeService } from './sidebar.theme.service';

import { NgClass } from '@angular/common';
import type { OnInit } from '@angular/core';
import { booleanAttribute, Component, inject, input, signal } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/sidebar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-sidebar',
  templateUrl: './sidebar.component.html',
  providers: [
    {
      provide: SidebarStateService,
      useFactory: () => {
        const service = inject(SidebarStateService, {
          skipSelf: true,
          optional: true,
        });

        return service || new SidebarStateService();
      },
    },
  ],
})
export class SidebarComponent extends BaseComponent implements OnInit {
  public readonly themeService = inject(SidebarThemeService);
  public readonly sidebarStateService: SidebarStateService = inject(SidebarStateService);

  public override contentClasses = signal<properties.SidebarClass>(properties.SidebarClassInstance);

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public isRounded = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<properties.SidebarBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      isOpen: booleanToFlowbiteBoolean(this.sidebarStateService.select('isOpen')()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public override ngOnInit(): void {
    this.sidebarStateService.set('isOpen', this.isOpen());

    super.ngOnInit();
  }
}
