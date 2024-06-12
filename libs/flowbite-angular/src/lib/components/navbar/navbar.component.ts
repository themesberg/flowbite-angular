import * as properties from './navbar.theme';

import { BaseComponent } from '../base.component';
import { NavbarState } from '../../services/state/navbar.state';
import { SignalStoreService } from '../../services/signal-store.service';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import {
  Component,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/navbar/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-navbar',
  templateUrl: './navbar.component.html',
  providers: [SignalStoreService<NavbarState>],
})
export class NavbarComponent extends BaseComponent {
  protected narbarSignalStoreService = inject<SignalStoreService<NavbarState>>(
    SignalStoreService<NavbarState>,
  );

  protected override contentClasses = signal<properties.NavbarClass>(
    properties.NavbarClassInstance,
  );

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
  public customStyle = input<Partial<properties.NavbarBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      border: booleanToFlowbiteBoolean(this.isRounded()),
      rounded: booleanToFlowbiteBoolean(this.hasBorder()),
      fixed: booleanToFlowbiteBoolean(this.isFixed()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
