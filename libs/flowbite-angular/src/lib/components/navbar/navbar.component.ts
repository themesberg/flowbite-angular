import * as properties from './navbar.theme';

import { BaseComponent } from '../base.component';
import { NavbarThemeService } from './navbar.theme.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import {
  Component,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { DeepPartial } from '../../common';
import { NavbarStateService } from '../../services';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  templateUrl: './navbar.component.html',
  providers: [
    {
      provide: NavbarStateService,
      useFactory: () => {
        const service = inject(NavbarStateService, {
          skipSelf: true,
          optional: true,
        });
        return service || new NavbarStateService();
      },
    },
  ],
})
export class NavbarComponent extends BaseComponent {
  protected override contentClasses = signal<properties.NavbarClass>(
    properties.NavbarClassInstance,
  );

  protected readonly themeService = inject(NavbarThemeService);
  protected readonly navbarStateService: NavbarStateService =
    inject(NavbarStateService);

  //#region properties
  public isRounded = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public hasBorder = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public isFixed = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<DeepPartial<properties.NavbarBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      hasBorder: booleanToFlowbiteBoolean(this.isRounded()),
      isRounded: booleanToFlowbiteBoolean(this.hasBorder()),
      isFixed: booleanToFlowbiteBoolean(this.isFixed()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
