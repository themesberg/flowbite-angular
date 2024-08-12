import type { DeepPartial } from '../../common';
import { SidebarStateService } from '../../services/state/sidebar.state';
import { createClass } from '../../utils';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import type { SidebarClass, SidebarTheme } from './sidebar.theme';
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
  template: `<ng-content />`,
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
  protected readonly themeService = inject(SidebarThemeService);
  protected readonly sidebarStateService = inject(SidebarStateService);

  public override contentClasses = signal<SidebarClass>(createClass({ rootClass: '' }));

  //#region properties
  public isOpen = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public isRounded = input<boolean, string | boolean>(false, { transform: booleanAttribute });
  public customStyle = input<DeepPartial<SidebarTheme>>({});
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
